const UA_IMG = "https://card.yuyu-tei.jp/ua/200_280";

const unionArenaData = {
    game: "unionarena",
    gameName: "ユニオンアリーナ",
    sets: [
        /* ===== UA02BT 呪術廻戦 ===== */
        {
            id: "jjk1",
            name: "呪術廻戦",
            updatedAt: "2026-06-24",
            cards: [
                { cardNo: "UA02BT/JJK-1-040", name: "虎杖 悠仁",             variant: "パラレル/特別仕様", rarity: "SR★★★", sellPrice: 29800, buyPrice: 19000, image: `${UA_IMG}/jjk1/10055.jpg` },
                { cardNo: "UA02BT/JJK-1-012", name: "五条 悟",               variant: "パラレル",          rarity: "SR★★",  sellPrice:  5980, buyPrice:  3500, image: `${UA_IMG}/jjk1/10016.jpg` },
                { cardNo: "UA02BT/JJK-1-040", name: "虎杖 悠仁",             variant: "パラレル",          rarity: "SR★★",  sellPrice:  5980, buyPrice:  3500, image: `${UA_IMG}/jjk1/10054.jpg` },
                { cardNo: "UA02BT/JJK-1-022", name: "伏黒 恵",               variant: "パラレル",          rarity: "SR★★",  sellPrice:  4980, buyPrice:  3000, image: `${UA_IMG}/jjk1/10028.jpg` },
                { cardNo: "UA02BT/JJK-1-008", name: "釘崎 野薔薇",           variant: "パラレル",          rarity: "SR★★",  sellPrice:  3980, buyPrice:  2300, image: `${UA_IMG}/jjk1/10010.jpg` },
                { cardNo: "UA02BT/JJK-1-048", name: "宿儺",                  variant: "パラレル",          rarity: "SR★★",  sellPrice:  3480, buyPrice:  2000, image: `${UA_IMG}/jjk1/10067.jpg` },
                { cardNo: "UA02BT/JJK-1-069", name: "夏油 傑",               variant: "パラレル",          rarity: "SR★★",  sellPrice:  2480, buyPrice:  1400, image: `${UA_IMG}/jjk1/10100.jpg` },
                { cardNo: "UA02BT/JJK-1-050", name: "禪院 真希",             variant: "パラレル",          rarity: "SR★",   sellPrice:  1980, buyPrice:   800, image: `${UA_IMG}/jjk1/10070.jpg` },
                { cardNo: "UA02BT/JJK-1-081", name: "東堂 葵",               variant: "パラレル",          rarity: "SR★",   sellPrice:  1980, buyPrice:   800, image: `${UA_IMG}/jjk1/10113.jpg` },
                { cardNo: "UA02BT/JJK-1-054", name: "七海 建人",             variant: "パラレル",          rarity: "SR★",   sellPrice:  1780, buyPrice:   700, image: `${UA_IMG}/jjk1/10075.jpg` },
                { cardNo: "UA02BT/JJK-1-093", name: "真人",                  variant: "パラレル",          rarity: "SR★",   sellPrice:   980, buyPrice:   380, image: `${UA_IMG}/jjk1/10128.jpg` },
                { cardNo: "UA02BT/JJK-1-005", name: "狗巻 棘",               variant: "パラレル",          rarity: "SR★",   sellPrice:   500, buyPrice:   150, image: `${UA_IMG}/jjk1/10006.jpg` },
                { cardNo: "UA02BT/JJK-1-084", name: "三輪 霞",               variant: "パラレル",          rarity: "SR★",   sellPrice:   500, buyPrice:   150, image: `${UA_IMG}/jjk1/10117.jpg` },
                { cardNo: "UA02BT/JJK-1-040", name: "虎杖 悠仁",             variant: "",                  rarity: "SR",    sellPrice:  2480, buyPrice:  1000, image: `${UA_IMG}/jjk1/10053.jpg` },
                { cardNo: "UA02BT/JJK-1-081", name: "東堂 葵",               variant: "",                  rarity: "SR",    sellPrice:   980, buyPrice:   350, image: `${UA_IMG}/jjk1/10112.jpg` },
                { cardNo: "UA02BT/JJK-1-050", name: "禪院 真希",             variant: "",                  rarity: "SR",    sellPrice:   780, buyPrice:   280, image: `${UA_IMG}/jjk1/10069.jpg` },
                { cardNo: "UA02BT/JJK-1-054", name: "七海 建人",             variant: "",                  rarity: "SR",    sellPrice:   500, buyPrice:   150, image: `${UA_IMG}/jjk1/10074.jpg` },
                { cardNo: "UA02BT/JJK-1-012", name: "五条 悟",               variant: "",                  rarity: "SR",    sellPrice:   680, buyPrice:   220, image: `${UA_IMG}/jjk1/10015.jpg` },
                { cardNo: "UA02BT/JJK-1-008", name: "釘崎 野薔薇",           variant: "",                  rarity: "SR",    sellPrice:   320, buyPrice:    90, image: `${UA_IMG}/jjk1/10009.jpg` },
                { cardNo: "UA02BT/JJK-1-022", name: "伏黒 恵",               variant: "",                  rarity: "SR",    sellPrice:   320, buyPrice:    90, image: `${UA_IMG}/jjk1/10027.jpg` },
                { cardNo: "UA02BT/JJK-1-093", name: "真人",                  variant: "",                  rarity: "SR",    sellPrice:   320, buyPrice:    90, image: `${UA_IMG}/jjk1/10127.jpg` },
                { cardNo: "UA02BT/JJK-1-048", name: "宿儺",                  variant: "",                  rarity: "SR",    sellPrice:   220, buyPrice:    70, image: `${UA_IMG}/jjk1/10066.jpg` },
                { cardNo: "UA02BT/JJK-1-069", name: "夏油 傑",               variant: "",                  rarity: "SR",    sellPrice:   220, buyPrice:    70, image: `${UA_IMG}/jjk1/10099.jpg` },
                { cardNo: "UA02BT/JJK-1-005", name: "狗巻 棘",               variant: "",                  rarity: "SR",    sellPrice:   120, buyPrice:    50, image: `${UA_IMG}/jjk1/10005.jpg` },
                { cardNo: "UA02BT/JJK-1-084", name: "三輪 霞",               variant: "",                  rarity: "SR",    sellPrice:   220, buyPrice:    70, image: `${UA_IMG}/jjk1/10116.jpg` }
            ]
        },

        /* ===== UA08BT BLEACH 千年血戦篇 ===== */
        {
            id: "blc1",
            name: "BLEACH 千年血戦篇",
            updatedAt: "2026-06-24",
            cards: [
                { cardNo: "UA08BT/BLC-1-041", name: "黒崎 一護",             variant: "パラレル/特別仕様", rarity: "SR★★★", sellPrice: 49800, buyPrice: 32000, image: `${UA_IMG}/blc1/10060.jpg` },
                { cardNo: "UA08BT/BLC-1-041", name: "黒崎 一護",             variant: "パラレル",          rarity: "SR★★",  sellPrice: 12800, buyPrice:  7500, image: `${UA_IMG}/blc1/10059.jpg` },
                { cardNo: "UA08BT/BLC-1-085", name: "日番谷 冬獅郎",         variant: "パラレル",          rarity: "SR★★",  sellPrice:  9980, buyPrice:  5800, image: `${UA_IMG}/blc1/10122.jpg` },
                { cardNo: "UA08BT/BLC-1-081", name: "更木 剣八",             variant: "パラレル",          rarity: "SR★★",  sellPrice:  6980, buyPrice:  4000, image: `${UA_IMG}/blc1/10116.jpg` },
                { cardNo: "UA08BT/BLC-1-050", name: "朽木 白哉",             variant: "パラレル",          rarity: "SR★★",  sellPrice:  4980, buyPrice:  2900, image: `${UA_IMG}/blc1/10075.jpg` },
                { cardNo: "UA08BT/BLC-1-047", name: "阿散井 恋次",           variant: "パラレル",          rarity: "SR★★",  sellPrice:  3980, buyPrice:  2300, image: `${UA_IMG}/blc1/10070.jpg` },
                { cardNo: "UA08BT/BLC-1-093", name: "山本 元柳斎 重國",      variant: "パラレル",          rarity: "SR★★",  sellPrice:  3980, buyPrice:  2300, image: `${UA_IMG}/blc1/10133.jpg` },
                { cardNo: "UA08BT/BLC-1-053", name: "朽木 ルキア",           variant: "パラレル",          rarity: "SR★",   sellPrice:  4980, buyPrice:  2000, image: `${UA_IMG}/blc1/10080.jpg` },
                { cardNo: "UA08BT/BLC-1-041", name: "黒崎 一護",             variant: "パラレル",          rarity: "SR★",   sellPrice:  3980, buyPrice:  1600, image: `${UA_IMG}/blc1/10058.jpg` },
                { cardNo: "UA08BT/BLC-1-014", name: "バンビエッタ・バスターバイン", variant: "パラレル",   rarity: "SR★",   sellPrice:  2480, buyPrice:  1000, image: `${UA_IMG}/blc1/10022.jpg` },
                { cardNo: "UA08BT/BLC-1-085", name: "日番谷 冬獅郎",         variant: "パラレル",          rarity: "SR★",   sellPrice:  2480, buyPrice:  1000, image: `${UA_IMG}/blc1/10121.jpg` },
                { cardNo: "UA08BT/BLC-1-050", name: "朽木 白哉",             variant: "パラレル",          rarity: "SR★",   sellPrice:  1280, buyPrice:   480, image: `${UA_IMG}/blc1/10074.jpg` },
                { cardNo: "UA08BT/BLC-1-070", name: "卯ノ花 八千流",         variant: "パラレル",          rarity: "SR★",   sellPrice:  1280, buyPrice:   480, image: `${UA_IMG}/blc1/10102.jpg` },
                { cardNo: "UA08BT/BLC-1-047", name: "阿散井 恋次",           variant: "パラレル",          rarity: "SR★",   sellPrice:   980, buyPrice:   360, image: `${UA_IMG}/blc1/10069.jpg` },
                { cardNo: "UA08BT/BLC-1-004", name: "エス・ノト",            variant: "パラレル",          rarity: "SR★",   sellPrice:   780, buyPrice:   280, image: `${UA_IMG}/blc1/10010.jpg` },
                { cardNo: "UA08BT/BLC-1-020", name: "ユーグラム・ハッシュヴァルト", variant: "パラレル",  rarity: "SR★",   sellPrice:   980, buyPrice:   360, image: `${UA_IMG}/blc1/10029.jpg` },
                { cardNo: "UA08BT/BLC-1-024", name: "ユーハバッハ",          variant: "パラレル",          rarity: "SR★",   sellPrice:   680, buyPrice:   240, image: `${UA_IMG}/blc1/10034.jpg` },
                { cardNo: "UA08BT/BLC-1-041", name: "黒崎 一護",             variant: "",                  rarity: "SR",    sellPrice:  1280, buyPrice:   480, image: `${UA_IMG}/blc1/10057.jpg` },
                { cardNo: "UA08BT/BLC-1-085", name: "日番谷 冬獅郎",         variant: "",                  rarity: "SR",    sellPrice:  1480, buyPrice:   550, image: `${UA_IMG}/blc1/10120.jpg` },
                { cardNo: "UA08BT/BLC-1-053", name: "朽木 ルキア",           variant: "",                  rarity: "SR",    sellPrice:   680, buyPrice:   240, image: `${UA_IMG}/blc1/10079.jpg` },
                { cardNo: "UA08BT/BLC-1-070", name: "卯ノ花 八千流",         variant: "",                  rarity: "SR",    sellPrice:   680, buyPrice:   240, image: `${UA_IMG}/blc1/10101.jpg` },
                { cardNo: "UA08BT/BLC-1-081", name: "更木 剣八",             variant: "",                  rarity: "SR",    sellPrice:   500, buyPrice:   150, image: `${UA_IMG}/blc1/10115.jpg` },
                { cardNo: "UA08BT/BLC-1-050", name: "朽木 白哉",             variant: "",                  rarity: "SR",    sellPrice:   320, buyPrice:    90, image: `${UA_IMG}/blc1/10073.jpg` },
                { cardNo: "UA08BT/BLC-1-047", name: "阿散井 恋次",           variant: "",                  rarity: "SR",    sellPrice:   320, buyPrice:    90, image: `${UA_IMG}/blc1/10068.jpg` },
                { cardNo: "UA08BT/BLC-1-093", name: "山本 元柳斎 重國",      variant: "",                  rarity: "SR",    sellPrice:   220, buyPrice:    70, image: `${UA_IMG}/blc1/10132.jpg` },
                { cardNo: "UA08BT/BLC-1-004", name: "エス・ノト",            variant: "",                  rarity: "SR",    sellPrice:   220, buyPrice:    70, image: `${UA_IMG}/blc1/10009.jpg` },
                { cardNo: "UA08BT/BLC-1-014", name: "バンビエッタ・バスターバイン", variant: "",          rarity: "SR",    sellPrice:   320, buyPrice:    90, image: `${UA_IMG}/blc1/10021.jpg` },
                { cardNo: "UA08BT/BLC-1-020", name: "ユーグラム・ハッシュヴァルト", variant: "",         rarity: "SR",    sellPrice:   220, buyPrice:    70, image: `${UA_IMG}/blc1/10028.jpg` },
                { cardNo: "UA08BT/BLC-1-024", name: "ユーハバッハ",          variant: "",                  rarity: "SR",    sellPrice:   220, buyPrice:    70, image: `${UA_IMG}/blc1/10033.jpg` }
            ]
        },

        /* ===== UA12BT ブルーロック ===== */
        {
            id: "blk1",
            name: "ブルーロック",
            updatedAt: "2026-06-24",
            cards: [
                { cardNo: "UA12BT/BLK-1-046", name: "潔 世一",               variant: "パラレル/特別仕様", rarity: "SR★★★", sellPrice: 39800, buyPrice: 26000, image: `${UA_IMG}/blk1/10063.jpg` },
                { cardNo: "UA12BT/BLK-1-039", name: "凪 誠士郎",             variant: "パラレル",          rarity: "SR★★",  sellPrice: 14800, buyPrice:  8800, image: `${UA_IMG}/blk1/10052.jpg` },
                { cardNo: "UA12BT/BLK-1-075", name: "糸師 凛",               variant: "パラレル",          rarity: "SR★★",  sellPrice: 14800, buyPrice:  8800, image: `${UA_IMG}/blk1/10108.jpg` },
                { cardNo: "UA12BT/BLK-1-046", name: "潔 世一",               variant: "パラレル",          rarity: "SR★★",  sellPrice: 12800, buyPrice:  7500, image: `${UA_IMG}/blk1/10062.jpg` },
                { cardNo: "UA12BT/BLK-1-055", name: "千切 豹馬",             variant: "パラレル",          rarity: "SR★★",  sellPrice:  9980, buyPrice:  5800, image: `${UA_IMG}/blk1/10078.jpg` },
                { cardNo: "UA12BT/BLK-1-059", name: "蜂楽 廻",               variant: "パラレル",          rarity: "SR★★",  sellPrice:  7980, buyPrice:  4600, image: `${UA_IMG}/blk1/10084.jpg` },
                { cardNo: "UA12BT/BLK-1-079", name: "國神 錬介",             variant: "パラレル",          rarity: "SR★★",  sellPrice:  3980, buyPrice:  2300, image: `${UA_IMG}/blk1/10113.jpg` },
                { cardNo: "UA12BT/BLK-1-015", name: "凪 誠士郎",             variant: "パラレル",          rarity: "SR★",   sellPrice:  1480, buyPrice:   580, image: `${UA_IMG}/blk1/10020.jpg` },
                { cardNo: "UA12BT/BLK-1-090", name: "蜂楽 廻",               variant: "パラレル",          rarity: "SR★",   sellPrice:  1480, buyPrice:   580, image: `${UA_IMG}/blk1/10126.jpg` },
                { cardNo: "UA12BT/BLK-1-004", name: "潔 世一",               variant: "パラレル",          rarity: "SR★",   sellPrice:  1280, buyPrice:   480, image: `${UA_IMG}/blk1/10006.jpg` },
                { cardNo: "UA12BT/BLK-1-022", name: "馬狼 照英",             variant: "パラレル",          rarity: "SR★",   sellPrice:   980, buyPrice:   360, image: `${UA_IMG}/blk1/10029.jpg` },
                { cardNo: "UA12BT/BLK-1-026", name: "御影 玲王",             variant: "パラレル",          rarity: "SR★",   sellPrice:   980, buyPrice:   360, image: `${UA_IMG}/blk1/10035.jpg` },
                { cardNo: "UA12BT/BLK-1-083", name: "千切 豹馬",             variant: "パラレル",          rarity: "SR★",   sellPrice:   780, buyPrice:   280, image: `${UA_IMG}/blk1/10118.jpg` },
                { cardNo: "UA12BT/BLK-1-046", name: "潔 世一",               variant: "",                  rarity: "SR",    sellPrice:   780, buyPrice:   280, image: `${UA_IMG}/blk1/10061.jpg` },
                { cardNo: "UA12BT/BLK-1-039", name: "凪 誠士郎",             variant: "",                  rarity: "SR",    sellPrice:   580, buyPrice:   180, image: `${UA_IMG}/blk1/10051.jpg` },
                { cardNo: "UA12BT/BLK-1-075", name: "糸師 凛",               variant: "",                  rarity: "SR",    sellPrice:   780, buyPrice:   280, image: `${UA_IMG}/blk1/10107.jpg` },
                { cardNo: "UA12BT/BLK-1-055", name: "千切 豹馬",             variant: "",                  rarity: "SR",    sellPrice:   500, buyPrice:   150, image: `${UA_IMG}/blk1/10077.jpg` },
                { cardNo: "UA12BT/BLK-1-059", name: "蜂楽 廻",               variant: "",                  rarity: "SR",    sellPrice:   500, buyPrice:   150, image: `${UA_IMG}/blk1/10083.jpg` },
                { cardNo: "UA12BT/BLK-1-079", name: "國神 錬介",             variant: "",                  rarity: "SR",    sellPrice:   320, buyPrice:    90, image: `${UA_IMG}/blk1/10112.jpg` },
                { cardNo: "UA12BT/BLK-1-004", name: "潔 世一",               variant: "",                  rarity: "SR",    sellPrice:   500, buyPrice:   150, image: `${UA_IMG}/blk1/10005.jpg` },
                { cardNo: "UA12BT/BLK-1-015", name: "凪 誠士郎",             variant: "",                  rarity: "SR",    sellPrice:   780, buyPrice:   280, image: `${UA_IMG}/blk1/10019.jpg` },
                { cardNo: "UA12BT/BLK-1-022", name: "馬狼 照英",             variant: "",                  rarity: "SR",    sellPrice:   320, buyPrice:    90, image: `${UA_IMG}/blk1/10028.jpg` },
                { cardNo: "UA12BT/BLK-1-026", name: "御影 玲王",             variant: "",                  rarity: "SR",    sellPrice:   420, buyPrice:   120, image: `${UA_IMG}/blk1/10034.jpg` },
                { cardNo: "UA12BT/BLK-1-083", name: "千切 豹馬",             variant: "",                  rarity: "SR",    sellPrice:   320, buyPrice:    90, image: `${UA_IMG}/blk1/10117.jpg` },
                { cardNo: "UA12BT/BLK-1-090", name: "蜂楽 廻",               variant: "",                  rarity: "SR",    sellPrice:   580, buyPrice:   180, image: `${UA_IMG}/blk1/10125.jpg` }
            ]
        },

        /* ===== UA27BT 学園アイドルマスター ===== */
        {
            id: "gim1",
            name: "学園アイドルマスター",
            updatedAt: "2026-06-24",
            cards: [
                { cardNo: "UA27BT/GIM-1-072", name: "藤田 ことね",           variant: "パラレル",          rarity: "SR★★",  sellPrice: 49800, buyPrice: 32000, image: `${UA_IMG}/gim1/10109.jpg` },
                { cardNo: "UA27BT/GIM-1-024", name: "秦谷 美鈴",             variant: "パラレル",          rarity: "SR★★",  sellPrice: 34800, buyPrice: 22000, image: `${UA_IMG}/gim1/10039.jpg` },
                { cardNo: "UA27BT/GIM-1-068", name: "花海 咲季",             variant: "パラレル/特別仕様", rarity: "SR★★★", sellPrice: 29800, buyPrice: 19000, image: `${UA_IMG}/gim1/10102.jpg` },
                { cardNo: "UA27BT/GIM-1-011", name: "篠澤 広",               variant: "パラレル",          rarity: "SR★★",  sellPrice: 29800, buyPrice: 19000, image: `${UA_IMG}/gim1/10017.jpg` },
                { cardNo: "UA27BT/GIM-1-020", name: "十王 星南",             variant: "パラレル",          rarity: "SR★★",  sellPrice: 29800, buyPrice: 19000, image: `${UA_IMG}/gim1/10032.jpg` },
                { cardNo: "UA27BT/GIM-1-053", name: "紫雲 清夏",             variant: "パラレル",          rarity: "SR★★",  sellPrice: 29800, buyPrice: 19000, image: `${UA_IMG}/gim1/10080.jpg` },
                { cardNo: "UA27BT/GIM-1-048", name: "葛城 リーリヤ",         variant: "パラレル",          rarity: "SR★★",  sellPrice: 29800, buyPrice: 19000, image: `${UA_IMG}/gim1/10072.jpg` },
                { cardNo: "UA27BT/GIM-1-063", name: "月村 手毬",             variant: "パラレル",          rarity: "SR★★",  sellPrice: 24800, buyPrice: 16000, image: `${UA_IMG}/gim1/10093.jpg` },
                { cardNo: "UA27BT/GIM-1-006", name: "倉本 千奈",             variant: "パラレル",          rarity: "SR★★",  sellPrice: 24800, buyPrice: 16000, image: `${UA_IMG}/gim1/10009.jpg` },
                { cardNo: "UA27BT/GIM-1-029", name: "花海 佑芽",             variant: "パラレル",          rarity: "SR★★",  sellPrice: 17800, buyPrice: 11000, image: `${UA_IMG}/gim1/10047.jpg` },
                { cardNo: "UA27BT/GIM-1-044", name: "有村 麻央",             variant: "パラレル",          rarity: "SR★★",  sellPrice: 14800, buyPrice:  9000, image: `${UA_IMG}/gim1/10065.jpg` },
                { cardNo: "UA27BT/GIM-1-016", name: "姫崎 莉波",             variant: "パラレル",          rarity: "SR★★",  sellPrice: 12800, buyPrice:  8000, image: `${UA_IMG}/gim1/10025.jpg` },
                { cardNo: "UA27BT/GIM-1-068", name: "花海 咲季",             variant: "パラレル",          rarity: "SR★★",  sellPrice: 12800, buyPrice:  8000, image: `${UA_IMG}/gim1/10101.jpg` },
                { cardNo: "UAPR/GIM-1-068",   name: "花海 咲季",             variant: "",                  rarity: "SR",    sellPrice:  3980, buyPrice:  2500, image: `${UA_IMG}/gim1/10165.jpg` },
                { cardNo: "UA27BT/GIM-1-006", name: "倉本 千奈",             variant: "",                  rarity: "SR",    sellPrice:   680, buyPrice:   240, image: `${UA_IMG}/gim1/10008.jpg` },
                { cardNo: "UA27BT/GIM-1-011", name: "篠澤 広",               variant: "",                  rarity: "SR",    sellPrice:   680, buyPrice:   240, image: `${UA_IMG}/gim1/10016.jpg` },
                { cardNo: "UA27BT/GIM-1-016", name: "姫崎 莉波",             variant: "",                  rarity: "SR",    sellPrice:   320, buyPrice:    90, image: `${UA_IMG}/gim1/10024.jpg` }
            ]
        }

        /* 追加予定:
           UA01BT コードギアス / UA03BT HUNTER×HUNTER / UA05BT 鬼滅の刃
           UA07BT 転スラ / UA10BT ヒロアカ / UA19BT ハイキュー
           UA21BT 幽遊白書 / UA23BT 進撃の巨人 / UA31BT まどマギ
           UA12BT ブルーロック Vol.2 / EX04BT 呪術廻戦 Vol.2 ... */
    ]
};
