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
    { id: 2, title: "自動ケーブル抜き取りアーム", author: "伊澤響", img: "./img/arm.jpeg", desc: "充電ケーブル挿しっぱなしによるバッテリー劣化を防いでくれます。" , tag: "生活/日常"},
    { id: 3, title: "植物に水をあげるロボット", author: "伊藤勝悟", img: "./img/each_img/itou.png", desc: "毎朝決まった時間に植物にお水をかけてくれるロボット。" , tag: "生活/日常"},
    { id: 4, title: "自動演奏ロボット", author: "岡本愛梨", img: "./img/each_img/okamoto.jpeg", desc: "自動で卓上木琴を演奏してくれるロボット" , tag: "癒し/音楽"},
    { id: 5, title: "ブラシ洗浄アーム", author: "加藤吏恩", img: "./img/each_img/katou.webp", desc: "ブラシの自動洗浄をしてくれます" , tag: "生活/日常"},
    { id: 6, title: "朝日を再現するライトアーム", author: "木村和貴", img: "./img/arm.jpeg", desc: "" , tag: "生活/日常"},
    { id: 7, title: "SOMA", author: "久保川直樹", img: "./img/arm.jpeg",
        desc: `SOMAの手は、人に触れることを前提に設計した「やさしいロボットハンド」です。
        指の関節を外から見えにくくし、白く丸みのある形状にすることで、機械的な怖さを抑えました。
        手のひらはわずかに凹ませ、触れた相手を包み込むような安心感を生み出します。`,tag: "教育"},
    { id: 8, title: "落としたもの回収補助ロボ", author: "小林樹希", img: "./img/arm.jpeg", desc: "なにか作業している時になにか物を落とした時に拾う手間を補助してくれるロボットです。" , tag: "整頓/片付け"},
    { id: 9, title: "", author: "齊藤唯斗", img: "./img/arm.jpeg", desc: "" , tag: ""},
    { id: 10, title: "振るアーム", author: "塩田颯", img: "./img/each_img/shiota.png", desc: "持たせたものを振るロボットアームです。" , tag: "癒し"},
    { id: 11, title: "", author: "徐躍", img: "./img/arm.jpeg", desc: "" , tag: ""},
    { id: 12, title: "バイターム", author: "助川祐哉", img: "./img/each_img/sukegawa.png", desc: "消毒+体温測定を同時に行える便利ロボット" , tag: "健康"},
    { id: 13, title: "TeachArm", author: "田口らな", img: "./img/each_img/taguti.png", desc: "紙の上の学びを、ロボットの動きと声でわかりやすく。指で「これ教えて！」と示すだけで、ロボットが該当箇所を指し示し、ヒントや説明を返してくれる学習アシスタントです。" , tag: "教育"},
    { id: 14, title: "", author: "高窪真拓", img: "./img/arm.jpeg", desc: "" , tag:""},
    { id: 15, title: "自動撮影ロボットアーム", author: "中村菫", img: "./img/each_img/nakamura.png", desc: "物の撮影を自動化するロボットアーム" , tag: "生活/日常"},
    { id: 16, title: "整理整頓アーム", author: "中山璃一", img: "./img/arm.jpeg", desc: "机上の小物を整理してくれるアーム" , tag: "整頓/片付け"},
    { id: 17, title: "Harvest Arm", author: "樋口杏珠", img: "./img/each_img/higuti.png", desc: "野菜が収穫可能か判別し、可能なものは収穫！収穫完了後はスマホに通知✨" , tag: "家庭菜園"},
    { id: 18, title: "洗濯サポート", author: "福田修斗", img: "./img/each_img/fukuda.png", desc: "洗濯かごから洗濯物をとる際の屈む動作（腰）の負担を軽減します。" , tag: "生活/日常"},
    { id: 19, title: "スマホスタンド", author: "本間志悠", img:"./img/arm.jpeg", desc:"スマホを空中に固定して、YouTubuなどのレシピを見ながら料理をするためのスマホスタンドです。" , tag:"生活/日常"},
    { id: 20, title:"安全ドリンクホルダー", author:"本間亘", img:"./img/arm.jpeg", desc:"" , tag:"生活/日常"},
    { id: 21, title:"", author:"前田柚希", img:"./img/arm.jpeg", desc:"" , tag:""},
    { id: 22, title: "", author: "三ツ俣颯太", img: "./img/arm.jpeg", desc: "" , tag: ""},
    { id: 23, title: "お菓子の袋を閉じる", author: "宮川麻実", img: "./img/arm.jpeg", desc: "" , tag: "生活/日常"},
    { id: 24, title: "ペットのご飯", author: "宮崎太庸", img: "./img/arm.jpeg", desc: "ペットのご飯用ロボットです" , tag: ""},
    { id: 25, title: "勝手にマッサージアーム", author: "宮澤文香", img: "./img/each_img/miyazawa.png", desc: "デスクワークの肩こり軽減" , tag: "健康"},
    { id: 26, title: "自動掃除ロボット", author: "森崎陸斗", img: "./img/arm.jpeg", desc: "自動で周辺を掃除してくれるロボットです" , tag: "整頓/片付け"},
    { id: 27, title: "ツボ押し", author: "山崎雄大", img: "./img/each_img/yamazaki.png", desc: "血行を改善します" , tag: ""},
    { id: 28, title: "自動畳みロボット", author: "由利奏音", img: "./img/each_img/yuri.png", desc: "自動で洗濯物をたたんでくれて、作業の負担を軽減" , tag: "洗濯"},
    { id: 29, title: "お湯沸かしアーム", author: "渡辺柚菜", img: "./img/each_img/watanabe.png", desc: "朝、毎日行う小さな作業を代わりに行ってくれるアームです。" , tag: "生活/日常"},
    { id: 30, title: "", author: "葛勝冬", img:"./img/arm.jpeg", desc: "" , tag: ""},
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
        workGrid.innerHTML = cards;
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
    }

    // 実行
    initWorks();
});