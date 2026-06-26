#!/usr/bin/env python3
"""
遊々亭から全カード・全レアリティの価格を取得して
data/hololive.js と data/xrossstars.js を自動生成する。
GitHub Actions により月2回（1日・15日）自動実行される。

価格履歴は data/price_history.json に永続保存。
画像ハッシュ（xross-stars）は data/xs_image_hashes.json に保存。
"""

import re
import sys
import time
import json
import os
import urllib.request
from datetime import datetime, timezone, timedelta

JST     = timezone(timedelta(hours=9))
HEADERS = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"}

# ホロライブOCG セット一覧（新→旧）
HOCG_SETS = [
    ("hbp08", "hBP08", "第8弾 バウンサーバウンド"),
    ("hbp07", "hBP07", "第7弾 ディーヴァフィーバー"),
    ("hbp06", "hBP06", "第6弾 アヤカシヴァーミリオン"),
    ("hbp05", "hBP05", "第5弾 エンチャントレガリア"),
    ("hbp04", "hBP04", "第4弾 キュリアスユニバース"),
    ("hbp03", "hBP03", "第3弾 エリートスパーク"),
    ("hbp02", "hBP02", "第2弾 クインテットスペクトラム"),
    ("hbp01", "hBP01", "第1弾 ブルーミングレディアンス"),
]

# クロススターズ セット一覧（新→旧）
XS_SETS = [
    ("xsbp03", "BP03", "第3弾 Broken Neonlights"),
    ("xsbp02", "BP02", "第2弾 Exceed Rampage"),
    ("xsbp01", "BP01", "第1弾 Luminous Daybreak"),
]

# レアリティ並び順（表示優先度）
HOCG_RARITY_ORDER = ["SEC", "OSR", "OUR", "UR", "HR", "RR", "SR", "R", "S", "U", "C"]
XS_RARITY_ORDER   = ["LRPP", "LRP", "SRP", "LR", "PP", "TR", "SR", "R", "UC", "C"]


def fetch(url):
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            return resp.read().decode("utf-8")
    except Exception as e:
        print(f"  [ERROR] {url}: {e}", file=sys.stderr)
        return ""


def parse_cards(html, price_type):
    """
    HTML からカード情報を解析する。
    戻り値: {(cardNo, rarity): {name, variant, price, link}}
    重複（状態違い）は最初のエントリ（最高価格）のみ採用。
    """
    results = {}
    blocks = re.split(r'<div[^>]+class="[^"]*card-product[^"]*"', html)

    for block in blocks[1:]:
        # カード番号・レアリティ
        alt = re.search(r'alt="([A-Za-z]+\d+-\d+)\s+([A-Z★\d]+)', block)
        if not alt:
            continue
        card_no = alt.group(1)
        rarity  = alt.group(2)
        key = (card_no, rarity)
        if key in results:
            continue  # 最初のエントリのみ採用

        # カード名・variant（例: "水宮枢(パラレル/サイン)"）
        name_tag = re.search(r'<h4[^>]*>([^<]+)</h4>', block)
        if not name_tag:
            continue
        full_name = name_tag.group(1).strip()
        nm = re.match(r'^(.+?)\(([^)]+)\)$', full_name)
        name    = nm.group(1).strip() if nm else full_name
        variant = nm.group(2).strip() if nm else ""

        # 価格
        if price_type == "sell":
            pm = re.search(r'<strong[^>]*class="d-block text-end\s*"[^>]*>\s*([\d,]+)\s*円', block)
        else:
            pm = re.search(r'<strong[^>]*class="[^"]*text-purple[^"]*"[^>]*>\s*([\d,]+)\s*円', block)
        if not pm:
            continue
        price = int(pm.group(1).replace(",", ""))

        # 遊々亭の個別カードURL
        lm = re.search(r'href="(https://yuyu-tei\.jp/sell/[^"]+/card/[^"]+)"', block)
        link = lm.group(1) if lm else ""

        results[key] = {"name": name, "variant": variant, "price": price, "link": link}

    return results


def scrape_set(game_code, set_url_id):
    """1弾分の販売・買取情報をスクレイピング"""
    sell_html = fetch(f"https://yuyu-tei.jp/sell/{game_code}/s/{set_url_id}")
    time.sleep(1.5)
    buy_html  = fetch(f"https://yuyu-tei.jp/buy/{game_code}/s/{set_url_id}")
    time.sleep(1.5)

    sell = parse_cards(sell_html, "sell")
    buy  = parse_cards(buy_html,  "buy")

    # 販売と買取をマージ
    merged = {}
    all_keys = set(sell) | set(buy)
    for key in all_keys:
        s = sell.get(key, {})
        b = buy.get(key, {})
        base = s if s else b
        merged[key] = {
            "name":      base.get("name", ""),
            "variant":   base.get("variant", ""),
            "sellPrice": s.get("price", 0),
            "buyPrice":  b.get("price", 0),
            "link":      base.get("link", ""),
        }

    print(f"  販売 {len(sell)}件  買取 {len(buy)}件  合計 {len(merged)}件")
    return merged


def load_history():
    path = "data/price_history.json"
    if os.path.exists(path):
        with open(path, encoding="utf-8") as f:
            return json.load(f)
    return {}


def save_history(history):
    with open("data/price_history.json", "w", encoding="utf-8") as f:
        json.dump(history, f, ensure_ascii=False, indent=2)


def update_history(history, card_no, rarity, month, sell, buy):
    key = f"{card_no}_{rarity}"
    if key not in history:
        history[key] = []
    entries = history[key]
    months = [e[0] for e in entries]
    if month in months:
        history[key] = [[m, sell if m == month else s, buy if m == month else b]
                        for m, s, b in entries]
    else:
        history[key].append([month, sell, buy])


def format_history(history, card_no, rarity):
    key = f"{card_no}_{rarity}"
    entries = history.get(key, [])
    if not entries:
        return "[]"
    inner = ",".join(f'["{m}",{s},{b}]' for m, s, b in entries)
    return f"[{inner}]"


def rarity_sort_key(rarity, order):
    try:
        return order.index(rarity)
    except ValueError:
        return len(order)


def generate_hololive_js(sets_data, history, today_str):
    lines = []
    lines.append('const HOCG = "https://hololive-official-cardgame.com/wp-content/images/cardlist";\n\n')
    lines.append('const hololiveData = {\n')
    lines.append('    game: "hololive",\n')
    lines.append('    gameName: "ホロライブOCG",\n')
    lines.append('    sets: [\n\n')

    for set_url_id, set_dir, set_name, cards in sets_data:
        lines.append(f'        /* ========== {set_name} ========== */\n')
        lines.append(f'        {{\n')
        lines.append(f'            id: "{set_url_id}", name: "{set_name}", updatedAt: "{today_str}",\n')
        lines.append(f'            cards: [\n')

        sorted_cards = sorted(
            cards.items(),
            key=lambda x: (rarity_sort_key(x[0][1], HOCG_RARITY_ORDER), -x[1]["sellPrice"])
        )

        for (card_no, rarity), info in sorted_cards:
            name      = info["name"]
            variant   = info["variant"]
            sell      = info["sellPrice"]
            buy_price = info["buyPrice"]
            link      = info["link"]
            hist_str  = format_history(history, card_no, rarity)
            image     = f"`${{HOCG}}/{set_dir}/{card_no}_{rarity}.png`"
            # 名前のパディング（見た目）
            lines.append(
                f'                {{ cardNo:"{card_no}", name:"{name}", variant:"{variant}",'
                f' rarity:"{rarity}", sellPrice:{sell}, buyPrice:{buy_price},'
                f' priceHistory:{hist_str},'
                f' image:{image},'
                f' link:"{link}" }},\n'
            )

        lines.append('            ]\n')
        lines.append('        },\n\n')

    lines.append('    ]\n')
    lines.append('};\n')

    with open("data/hololive.js", "w", encoding="utf-8") as f:
        f.writelines(lines)

    total = sum(len(c) for _, _, _, c in sets_data)
    print(f"  data/hololive.js 生成: {total} 件")


def generate_xs_js(sets_data, history, image_hashes, today_str):
    lines = []
    lines.append('const XS = "https://assets.xross-stars.com/card";\n\n')
    lines.append('const xrossStarsData = {\n')
    lines.append('    game: "xrossstars",\n')
    lines.append('    gameName: "クロススターズ",\n')
    lines.append('    sets: [\n\n')

    for set_url_id, set_dir, set_name, cards in sets_data:
        lines.append(f'        /* ========== {set_name} ========== */\n')
        lines.append(f'        {{\n')
        lines.append(f'            id: "xs{set_url_id}", name: "{set_name}", updatedAt: "{today_str}",\n')
        lines.append(f'            cards: [\n')

        sorted_cards = sorted(
            cards.items(),
            key=lambda x: (rarity_sort_key(x[0][1], XS_RARITY_ORDER), -x[1]["sellPrice"])
        )

        for (card_no, rarity), info in sorted_cards:
            name      = info["name"]
            variant   = info["variant"]
            sell      = info["sellPrice"]
            buy_price = info["buyPrice"]
            link      = info["link"]
            hist_str  = format_history(history, card_no, rarity)

            # 画像URL（既知のハッシュがあれば使用、なければ空）
            img_key = f"{card_no}_{rarity}"
            img_url = image_hashes.get(img_key, "")
            image   = f'"{img_url}"' if img_url else '""'

            lines.append(
                f'                {{ cardNo:"{card_no}", name:"{name}", variant:"{variant}",'
                f' rarity:"{rarity}", sellPrice:{sell}, buyPrice:{buy_price},'
                f' priceHistory:{hist_str},'
                f' image:{image},'
                f' link:"{link}" }},\n'
            )

        lines.append('            ]\n')
        lines.append('        },\n\n')

    lines.append('    ]\n')
    lines.append('};\n')

    with open("data/xrossstars.js", "w", encoding="utf-8") as f:
        f.writelines(lines)

    total = sum(len(c) for _, _, _, c in sets_data)
    print(f"  data/xrossstars.js 生成: {total} 件")


def main():
    now        = datetime.now(JST)
    today_str  = now.strftime("%Y-%m-%d")
    month_str  = now.strftime("%Y-%m")

    print(f"=== 価格自動更新 {now.strftime('%Y年%m月%d日 %H:%M JST')} ===\n")

    history      = load_history()
    image_hashes = {}
    if os.path.exists("data/xs_image_hashes.json"):
        with open("data/xs_image_hashes.json", encoding="utf-8") as f:
            image_hashes = json.load(f)

    # ホロライブOCG
    print("【ホロライブOCG】")
    hocg_sets_data = []
    for set_url_id, set_dir, set_name in HOCG_SETS:
        print(f"  {set_name} ...", end=" ", flush=True)
        cards = scrape_set("hocg", set_url_id)
        # 価格履歴を更新
        for (card_no, rarity), info in cards.items():
            if info["sellPrice"] > 0 or info["buyPrice"] > 0:
                update_history(history, card_no, rarity, month_str,
                               info["sellPrice"], info["buyPrice"])
        hocg_sets_data.append((set_url_id, set_dir, set_name, cards))

    print("\nhololive.js を生成中...")
    generate_hololive_js(hocg_sets_data, history, today_str)

    # クロススターズ
    print("\n【クロススターズ】")
    xs_sets_data = []
    for set_url_id, set_dir, set_name in XS_SETS:
        print(f"  {set_name} ...", end=" ", flush=True)
        cards = scrape_set("xs", set_url_id)
        for (card_no, rarity), info in cards.items():
            if info["sellPrice"] > 0 or info["buyPrice"] > 0:
                update_history(history, card_no, rarity, month_str,
                               info["sellPrice"], info["buyPrice"])
        xs_sets_data.append((set_url_id, set_dir, set_name, cards))

    print("\nxrossstars.js を生成中...")
    generate_xs_js(xs_sets_data, history, image_hashes, today_str)

    # 価格履歴を保存
    save_history(history)
    print("\n=== 完了 ===")


if __name__ == "__main__":
    main()
