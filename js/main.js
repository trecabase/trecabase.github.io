const gameDataMap = {
    hololive: hololiveData,
    xrossstars: xrossStarsData
};

let currentGame = "hololive";
let currentSet = null;
let currentRarity = "all";
let currentCards = [];
let currentSearch = "";

function formatPrice(price) {
    return "¥" + price.toLocaleString("ja-JP");
}

function getRarityClass(rarity) {
    const map = {
        "SEC":    "rarity-sec",
        "OUR":    "rarity-our",
        "UR":     "rarity-ur",
        "LRPP":   "rarity-sec",
        "LRP":    "rarity-our",
        "SRP":    "rarity-ur",
        "LR":     "rarity-sr",
        "SR★★★": "rarity-sr3",
        "SR★★":  "rarity-sr2",
        "SR★":   "rarity-sr1",
        "SR":     "rarity-sr",
        "R":      "rarity-r"
    };
    return map[rarity] || "rarity-default";
}

function getRankClass(rank) {
    if (rank === 1) return "rank-gold";
    if (rank === 2) return "rank-silver";
    if (rank === 3) return "rank-bronze";
    return "";
}

function renderSetTabs(sets) {
    const container = document.getElementById("setTabs");
    container.innerHTML =
        `<select class="set-select">` +
        sets.map(set => `<option value="${set.id}">${set.name}</option>`).join("") +
        `</select>`;

    container.querySelector(".set-select").addEventListener("change", function() {
        currentSet = this.value;
        currentRarity = "all";
        renderRarityFilter();
        renderCards();
    });
}

function getRarities(cards) {
    const order = ["SEC", "OUR", "UR", "LRPP", "LRP", "SRP", "SR★★★", "SR★★", "SR★", "LR", "SR", "R", "C"];
    const found = [...new Set(cards.map(c => c.rarity))];
    return found.sort((a, b) => {
        const ai = order.indexOf(a);
        const bi = order.indexOf(b);
        return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
    });
}

function renderRarityFilter() {
    const gameData = gameDataMap[currentGame];
    const set = gameData.sets.find(s => s.id === currentSet);
    if (!set) return;

    const rarities = getRarities(set.cards);
    const container = document.getElementById("filterBar");
    container.innerHTML =
        `<button class="rarity-btn active" data-rarity="all">すべて</button>` +
        rarities.map(r =>
            `<button class="rarity-btn ${getRarityClass(r)}" data-rarity="${r}">${r}</button>`
        ).join("");

    container.querySelectorAll(".rarity-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            container.querySelectorAll(".rarity-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentRarity = btn.dataset.rarity;
            renderCards();
        });
    });
}

function renderSearchBox() {
    const container = document.getElementById("searchBox");
    container.innerHTML = `<input class="card-search" type="search" placeholder="カード名・カード番号で検索" value="${currentSearch}">`;
    container.querySelector(".card-search").addEventListener("input", function() {
        currentSearch = this.value.trim().toLowerCase();
        renderCards();
    });
}

function renderCards() {
    const gameData = gameDataMap[currentGame];
    const set = gameData.sets.find(s => s.id === currentSet);
    if (!set) return;

    document.getElementById("updatedAt").textContent = `最終更新：${set.updatedAt}　※価格は参考値です`;

    let cards = [...set.cards].sort((a, b) => b.sellPrice - a.sellPrice);
    if (currentRarity !== "all") {
        cards = cards.filter(c => c.rarity === currentRarity);
    }
    if (currentSearch) {
        cards = cards.filter(c =>
            c.name.toLowerCase().includes(currentSearch) ||
            c.cardNo.toLowerCase().includes(currentSearch) ||
            (c.variant && c.variant.toLowerCase().includes(currentSearch))
        );
    }

    currentCards = cards;

    const grid = document.getElementById("cardGrid");
    if (cards.length === 0) {
        grid.innerHTML = `<p class="no-results">「${currentSearch}」に一致するカードが見つかりませんでした。</p>`;
        return;
    }

    grid.innerHTML = cards.map((card, i) => {
        const rank = i + 1;
        const rankClass = getRankClass(rank);
        const rarityClass = getRarityClass(card.rarity);
        const variantText = card.variant ? ` <span class="card-variant">${card.variant}</span>` : "";
        return `
        <div class="card-item" data-card-idx="${i}">
            <div class="card-image-wrap">
                <img
                    src="${card.image}"
                    alt="${card.name}"
                    loading="lazy"
                    onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22140%22%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22%231a1a2e%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23555%22 font-size=%2212%22%3ENo Image%3C/text%3E%3C/svg%3E'"
                >
                <span class="rank-badge ${rankClass}">${rank}位</span>
            </div>
            <div class="card-info">
                <div class="card-name">${card.name}${variantText}</div>
                <div class="card-meta">
                    <span class="card-no">${card.cardNo}</span>
                    <span class="rarity-badge ${rarityClass}">${card.rarity}</span>
                </div>
                <div class="card-prices">
                    <div class="price sell-price">
                        <span class="price-label">販売</span>
                        <span class="price-value">${formatPrice(card.sellPrice)}</span>
                    </div>
                    <div class="price buy-price">
                        <span class="price-label">買取</span>
                        <span class="price-value">${formatPrice(card.buyPrice)}</span>
                    </div>
                </div>
                <div class="card-links">
                    <a href="${card.buyLink}" target="_blank" rel="noopener" class="card-link-btn sell-btn">購入</a>
                    <a href="${card.sellLink}" target="_blank" rel="noopener" class="card-link-btn buy-btn">売る</a>
                </div>
            </div>
        </div>`;
    }).join("");
}

/* ===== チャートモーダル ===== */

function openChartModal(card) {
    const modal = document.getElementById("chartModal");

    document.getElementById("modalCardImg").src = card.image;
    document.getElementById("modalCardImg").alt = card.name;
    document.getElementById("modalCardName").textContent = card.name + (card.variant ? `【${card.variant}】` : "");
    document.getElementById("modalCardNo").textContent = card.cardNo;
    const rarityEl = document.getElementById("modalCardRarity");
    rarityEl.textContent = card.rarity;
    rarityEl.className = "rarity-badge " + getRarityClass(card.rarity);
    document.getElementById("modalSellPrice").textContent = formatPrice(card.sellPrice);
    document.getElementById("modalBuyPrice").textContent = formatPrice(card.buyPrice);

    const now = new Date();
    const thisMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
    const history = card.priceHistory ? card.priceHistory.map(h => [...h]) : [];
    if (!history.length || history[history.length - 1][0] !== thisMonth) {
        history.push([thisMonth, card.sellPrice, card.buyPrice]);
    }

    modal.classList.add("open");

    requestAnimationFrame(() => {
        const canvas = document.getElementById("priceChart");
        drawPriceChart(canvas, history);
    });
}

function drawPriceChart(canvas, history) {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width  = rect.width  * dpr;
    canvas.height = rect.height * dpr;
    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);

    const W = rect.width;
    const H = rect.height;
    const PAD = { top: 24, right: 16, bottom: 44, left: 64 };
    const cW = W - PAD.left - PAD.right;
    const cH = H - PAD.top - PAD.bottom;

    ctx.fillStyle = "#0f0f20";
    ctx.fillRect(0, 0, W, H);

    if (!history.length) return;

    const sellPrices = history.map(h => h[1]);
    const buyPrices  = history.map(h => h[2]);
    const allPrices  = [...sellPrices, ...buyPrices];
    let minP = Math.min(...allPrices);
    let maxP = Math.max(...allPrices);

    /* Y軸の余白 */
    const spread = maxP - minP || maxP * 0.2;
    minP = Math.max(0, minP - spread * 0.2);
    maxP = maxP + spread * 0.15;

    /* 綺麗な目盛り */
    const rawStep = (maxP - minP) / 4;
    const mag = Math.pow(10, Math.floor(Math.log10(rawStep)));
    const step = Math.ceil(rawStep / mag) * mag;
    minP = Math.floor(minP / step) * step;
    maxP = minP + step * 5;

    const toY = p => PAD.top + cH - ((p - minP) / (maxP - minP)) * cH;
    const toX = i => {
        if (history.length === 1) return PAD.left + cW / 2;
        return PAD.left + (i / (history.length - 1)) * cW;
    };

    /* グリッド＆Y軸ラベル */
    ctx.textAlign = "right";
    ctx.font = `${11 * dpr / dpr}px sans-serif`;
    for (let i = 0; i <= 5; i++) {
        const p = minP + step * i;
        const y = toY(p);
        ctx.strokeStyle = "#1e1e3a";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(PAD.left, y);
        ctx.lineTo(PAD.left + cW, y);
        ctx.stroke();

        ctx.fillStyle = "#6666aa";
        const label = p >= 10000
            ? `${(p / 10000).toFixed(p % 10000 === 0 ? 0 : 1)}万`
            : `${(p / 1000).toFixed(0)}千`;
        ctx.fillText(label, PAD.left - 6, y + 4);
    }

    /* X軸ラベル */
    ctx.textAlign = "center";
    ctx.fillStyle = "#6666aa";
    let prevYear = "";
    history.forEach((h, i) => {
        const x = toX(i);
        const [yr, mo] = h[0].split("-");
        ctx.fillText(`${parseInt(mo)}月`, x, PAD.top + cH + 16);
        if (yr !== prevYear) {
            ctx.fillStyle = "#555588";
            ctx.fillText(yr, x, PAD.top + cH + 30);
            ctx.fillStyle = "#6666aa";
            prevYear = yr;
        }
    });

    /* 折れ線を描く共通関数 */
    const drawLine = (priceIdx, color) => {
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.lineJoin = "round";
        ctx.beginPath();
        history.forEach((h, i) => {
            const x = toX(i);
            const y = toY(h[priceIdx]);
            i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        });
        ctx.stroke();

        history.forEach((h, i) => {
            const x = toX(i);
            const y = toY(h[priceIdx]);
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
            ctx.strokeStyle = "#0f0f20";
            ctx.lineWidth = 1.5;
            ctx.stroke();
        });
    };

    drawLine(1, "#4ecdc4"); /* 販売 */
    drawLine(2, "#ff6b6b"); /* 買取 */

    /* 1点のみの場合は注記 */
    const noteEl = document.getElementById("chartNote");
    if (history.length === 1) {
        const [yr, mo] = history[0][0].split("-");
        noteEl.textContent = `記録開始：${yr}年${parseInt(mo)}月　来月から推移グラフが表示されます`;
    } else {
        noteEl.textContent = "";
    }
}

function closeChartModal() {
    document.getElementById("chartModal").classList.remove("open");
}

function initChartModal() {
    document.getElementById("chartModalClose").addEventListener("click", closeChartModal);
    document.getElementById("chartModal").addEventListener("click", function(e) {
        if (e.target === this) closeChartModal();
    });
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape") closeChartModal();
    });
    document.getElementById("cardGrid").addEventListener("click", function(e) {
        const wrap = e.target.closest(".card-image-wrap");
        if (!wrap) return;
        const item = wrap.closest(".card-item");
        if (!item) return;
        const idx = parseInt(item.dataset.cardIdx, 10);
        if (!isNaN(idx) && currentCards[idx]) openChartModal(currentCards[idx]);
    });
}

function renderGameTabs() {
    document.getElementById("gameTabs").querySelectorAll(".game-tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".game-tab-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentGame = btn.dataset.game;
            currentRarity = "all";
            currentSearch = "";
            const gameData = gameDataMap[currentGame];
            currentSet = gameData.sets[0].id;
            renderSetTabs(gameData.sets);
            renderRarityFilter();
            renderSearchBox();
            renderCards();
        });
    });
}

function init() {
    const gameData = gameDataMap[currentGame];
    currentSet = gameData.sets[0].id;
    renderGameTabs();
    renderSetTabs(gameData.sets);
    renderRarityFilter();
    renderSearchBox();
    renderCards();
    initChartModal();
}

document.addEventListener("DOMContentLoaded", init);
