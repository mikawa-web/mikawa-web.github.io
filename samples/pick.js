/* 動きのある見本（F〜I）に、雰囲気を選ぶ帯と説明の帯を付ける。?bare=1 のときは付けない */
(() => {
  const sc = document.currentScript, k = sc.dataset.k, base = sc.dataset.base || "";
  if (new URLSearchParams(location.search).has("bare")) return;
  const L = [
    ["a", "A　きっちり", "#a"], ["b", "B　力強い", "#b"], ["c", "C　やわらか", "#c"], ["d", "D　老舗", "#d"], ["e", "E　先進的", "#e"],
    ["f", "F　ネオン ▶", "motion/"], ["g", "G　雑誌ふう ▶", "motion/g.html"], ["h", "H　一枚ずつ ▶", "motion/h.html"], ["i", "I　ポップ ▶", "motion/i.html"],
    ["j", "J　設計図 ▶", "motion/j.html"], ["k", "K　すりガラス ▶", "motion/k.html"], ["l", "L　大きな文字 ▶", "motion/l.html"], ["m", "M　手描き ▶", "motion/m.html"],
    ["n", "N　工務店 ▶", "motion/n.html"], ["o", "O　和菓子店 ▶", "motion/o.html"], ["p", "P　歯科医院 ▶", "motion/p.html"], ["q", "Q　税理士事務所 ▶", "motion/q.html"]
  ];
  const D = {
    f: ["F　ネオン", "黒地に光の線が流れ、工程が横に流れます。技術の新しさと勢いを見せたい会社に。"],
    g: ["G　雑誌ふう", "写真と大きな文字を、雑誌のように組みます。ものづくりの姿勢をじっくり読ませたい会社に。"],
    h: ["H　一枚ずつ", "1 画面ずつ切り替わる、紙芝居のような作り。伝えたいことを絞って、印象を残したい会社に。"],
    i: ["I　ポップ", "タイルとカードが弾みます。お店や、若い人に来てほしい会社に。"],
    j: ["J　設計図", "青い図面の上で、線が描かれ、部品がばらけます。技術と精度をそのまま見せたい会社に。"],
    k: ["K　すりガラス", "やわらかい色が漂い、ガラスのようなカードが重なります。新しさと頼みやすさを見せたい会社に。"],
    l: ["L　大きな文字", "白と黒と赤だけ。画面いっぱいの文字が流れ、切り替わります。ひと言で強く覚えてもらいたい会社に。"],
    m: ["M　手描き", "紙の上に手描きの線、写真、ふせん、はんこ。人柄と親しみやすさを伝えたい会社やお店に。"],
    n: ["N　工務店", "工事の前と後をつまみで見くらべ、施工事例をしぼりこめます。見学会までの日数も毎日変わります。"],
    o: ["O　和菓子店", "のれんが開き、季節をえらぶと色もお菓子も変わります。営業中かどうかと、取り置きのかごが付きます。"],
    p: ["P　歯科医院", "症状からさがせて、日と時間をえらんで予約まで進めます。きょうの診療時間も、その場でわかります。"],
    q: ["Q　税理士事務所", "お悩みのチェックと、料金の目安がその場で出る計算つき。月ごとの税の予定も見られます。"]
  };
  document.documentElement.style.setProperty("--top", "56px");
  const st = document.createElement("style");
  st.textContent = `
.pk{position:fixed;top:0;left:0;right:0;height:56px;z-index:9000;background:#14171c;color:#fff;font:13px/1.5 "Noto Sans JP",sans-serif;cursor:auto}
.pk>div{max-width:1120px;height:100%;margin:0 auto;padding:0 22px;display:flex;gap:14px;align-items:center}
.pk b{white-space:nowrap}
.pk nav{display:flex;gap:6px;overflow-x:auto;scrollbar-width:none}
.pk nav a{font-weight:700;white-space:nowrap;color:#cfd5dd;background:#262b33;border-radius:99px;padding:8px 14px;min-height:38px;display:flex;align-items:center;text-decoration:none}
.pk nav a[aria-current]{background:#fff;color:#14171c}
.pk .bk{margin-left:auto;white-space:nowrap;color:#9aa3ae;text-decoration:underline}
.pn0{position:fixed;left:0;right:0;bottom:0;z-index:8999;background:rgba(20,23,28,.92);color:#e8ebef;font:12px/1.5 "Noto Sans JP",sans-serif}
.pn0>div{max-width:1120px;margin:0 auto;padding:9px 22px;display:flex;gap:4px 16px;flex-wrap:wrap}
.pn0 b{font-size:13px}.pn0 i{font-style:normal;margin-left:auto;color:#9aa3ae}
@media(max-width:760px){.pk b,.pk .bk,.pn0 i{display:none}}`;
  document.head.append(st);
  const bar = document.createElement("div"); bar.className = "pk";
  bar.innerHTML = "<div><b>雰囲気をえらぶ</b><nav>" + L.map(([key, label, href]) => `<a href="${base}${href}"${key === k ? ' aria-current="page"' : ""}>${label}</a>`).join("") + `</nav><a class="bk" href="${base}../">三河ウェブ製作所へ戻る</a></div>`;
  const note = document.createElement("div"); note.className = "pn0";
  note.innerHTML = `<div><b>${D[k][0]}（動きあり）</b><span>${D[k][1]}</span><i>※ 架空の会社を使った見本です</i></div>`;
  document.body.append(bar, note);
  bar.querySelector("[aria-current]").scrollIntoView({ inline: "center", block: "nearest" });
})();
