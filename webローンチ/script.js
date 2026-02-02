/**
 * 31人分の作品データ
 * id: 識別番号
 * title: 作品名
 * author: 制作者名
 * img: 画像パス
 * desc: モーダルに表示する詳細説明
 * tag: タグ（例：生活、エンタメ、教育など）
 */
const worksData = [
    { id: 1, title: "書類整理", author: "綾部悠斗", img: "./img/arm.jpeg", desc: "書類を整理してくれるアームです" , tag: "教育"},
    { id: 2, title: "植物に水をあげるロボット", author: "伊藤勝悟", img: "./img/arm.jpeg", desc: "毎朝決まった時間に植物にお水をかけてくれるロボット。" , tag: "生活/日常"},
    { id: 3, title: "自動演奏ロボット", author: "岡本愛梨", img: "./img/each_img/okamoto.jpeg", desc: "自動で卓上木琴を演奏してくれるロボット" , tag: "癒し/音楽"},
    { id: 4, title: "ブラシ洗浄アーム", author: "加藤吏恩", img: "./img/each_img/katou.webp", desc: "ブラシの自動洗浄をしてくれます" , tag: "生活/日常"},
    { id: 5, title: "朝日を再現するライトアーム", author: "木村和貴", img: "./img/arm.jpeg", desc: "" , tag: "生活/日常"},
    { id: 6, title: "落としたもの回収補助ロボ", author: "小林樹希", img: "./img/arm.jpeg", desc: "なにか作業している時になにか物を落とした時に拾う手間を補助してくれるロボットです。" , tag: "整頓/片付け"},
    { id: 7, title: "落としたもの回収補助ロボ", author: "小林樹希", img: "./img/arm.jpeg", desc: "なにか作業している時になにか物を落とした時に拾う手間を補助してくれるロボットです。" , tag: "整頓/片付け"},
    // ここに 31人分まで同じ形式で追加していきます
];

/**
 * 初期化処理
 */
document.addEventListener('DOMContentLoaded', () => {
    const workGrid = document.getElementById('workGrid');
    const modal = document.getElementById('workModal');
    const closeBtn = document.querySelector('.close-btn');

    // 1. 作品カードを自動生成
    function initWorks() {
        if (!workGrid) return;

        const cards = worksData.map(work => `
            <div class="work-card" onclick="openModal(${work.id})">
                <div class="work-img"><img src="${work.img}" alt="${work.title}"></div>
                <div class="work-info">
                    <h3>${work.title}</h3>
                    <p>${work.author}</p>
                    <p>${work.tag}</p>
                </div>
            </div>
        `).join('');
        
        // 無限ループ用に2セット分（31人×2 = 62枚）を連結
        workGrid.innerHTML = cards + cards;
    }

    // 2. モーダルを開く（グローバルに関数を公開）
    window.openModal = function(id) {
        const data = worksData.find(w => w.id === id);
        if (!data || !modal) return;

        document.getElementById('modalImg').src = data.img;
        document.getElementById('modalTitle').innerText = data.title;
        document.getElementById('modalAuthor').innerText = data.author;
        document.getElementById('modalDesc').innerText = data.desc;
        document.getElementById('modalTag').innerText = data.tag;

        modal.style.display = 'flex';
        // 背景スクロールを防止
        document.body.style.overflow = 'hidden';
    };

    // 3. モーダルを閉じる
    if (closeBtn) {
        closeBtn.onclick = () => closeModal();
    }

    window.onclick = (event) => {
        if (event.target == modal) closeModal();
    };

    function closeModal() {
        modal.style.display = 'none';
        // 背景スクロールを再開
        document.body.style.overflow = 'auto';
    }

    // 実行
    initWorks();
});