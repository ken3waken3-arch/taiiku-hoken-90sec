const slides=[
 {kicker:'まず確認｜引き継がれる軸',title:'体育の「3つの柱」は続く',copy:'知識・技能 ／ 思考・判断・表現 ／ 学びに向かう力・人間性。三つの資質・能力を育てる基本構造は、審議まとめでも引き継がれています。',tag:'資料の記述｜現行から継続',alt:'学校体育で引き継がれる三つの柱を示す動画スライド',voice:'まず確認です。知識・技能、思考・判断・表現、学びに向かう力・人間性。三つの資質・能力を育てる基本構造は、審議まとめでも引き継がれています。'},
 {kicker:'引き継がれる軸',title:'「できる」だけが目的ではない',copy:'現行の学習指導要領にも、する・みる・支える・知るなど、多様な関わり方と、生涯にわたる豊かなスポーツライフの考え方があります。',tag:'資料の記述｜現行から継続',alt:'体育館で子どもたちが声を掛け合い、ボールゲームに取り組む様子',voice:'体育は、できるようになることだけが目的ではありません。現行の学習指導要領にも、する・みる・支える・知るなど、多様な関わりと生涯のスポーツが示されています。'},
 {kicker:'変わる方向｜系統性',title:'発達段階ごとのねらいを明確に',copy:'小4まで：動きの基礎 ／ 小5〜中2：多くの領域を経験 ／ 中3以降：卒業後の多様な関わり。大きく4年ごとのまとまりは引き続き基本です。',tag:'審議まとめの改善方向（案）',alt:'体育館で子どもたちが運動に取り組む様子',voice:'変わる方向の一つは、学びの系統性です。小四まで、小五から中二、中三以降と、発達段階ごとのねらいを明確にします。大きく四年ごとのまとまりは引き継ぐ方向です。'},
 {kicker:'変わる方向｜内容と評価',title:'種目を網羅するより、育てる動きへ',copy:'小4までは具体的な種目の網羅より、育てたい動きを軸に整理。態度に関する指導・評価も、分かりやすく具体化する案です。',tag:'審議まとめの改善方向（案）',alt:'体育館で子どもがバランス運動をしている様子',voice:'小四までは、運動の種類を網羅するのでなく、育てたい動きを軸に整理する案です。態度の指導や評価も、理解しやすく具体化する方向が示されています。'},
 {kicker:'なぜ見直す？｜資料に示された課題',title:'学びの質と、実施しやすさの両立',copy:'内容が広く関係も複雑で、指導・評価が難しい。技能差や運動への苦手意識も踏まえ、全員が安心して学べる機会を保障する必要があります。',tag:'課題認識の要約',alt:'保健の授業で教師と子どもたちが学ぶ様子',voice:'なぜ見直すのでしょう。内容が広く関係も複雑で、指導や評価が難しい課題がありました。技能差や運動への苦手意識も踏まえ、誰もが安心して学べる機会を保障するためです。'},
 {kicker:'保健と授業づくり',title:'生活へつなぐ学びに',copy:'保健は、身近な生活から科学的理解、さらに社会・生涯の視点へ。授業提案：ゲームで役割を選び、どんな参加が楽しかったか振り返る。',tag:'前半：資料の方向性 ／ 後半：授業提案',alt:'体育館で授業を振り返る子どもたちと教師',voice:'保健は、生活に近い学びから科学的理解、さらに社会や生涯の視点へ。授業づくりの提案は、ゲームで参加役割を選べるようにすること。これは資料の決定事項ではありません。'}
];
const list=document.getElementById('transcript-list');
slides.forEach((s,i)=>{const li=document.createElement('li');const b=document.createElement('strong');b.textContent=`${i*15}–${(i+1)*15}秒　${s.title} `;li.append(b,document.createTextNode(s.voice));list.append(li);});
const search=document.getElementById('search');
search.addEventListener('input',()=>{const q=search.value.trim().toLocaleLowerCase();let found=0;document.querySelectorAll('.searchable').forEach(el=>{const hay=(el.innerText+' '+(el.dataset.search||'')).toLocaleLowerCase();const match=!q||hay.includes(q);el.classList.toggle('hidden-result',!match);if(match)found++;});document.getElementById('search-status').textContent=q?`${found}件`:'';});
