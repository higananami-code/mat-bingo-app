const GAS_MAIN =
"https://script.google.com/macros/s/AKfycbyS00omgzqqnVEZJIZ805HdcjcwNBuPJ9GK6dNz6VOkhmZm6abfRIAgGMucUAAR77EvPw/exec";

const GAS_BACKUP =
"https://script.google.com/macros/s/AKfycbzW0f-MslWzY2a8MBDIUpOPQx7z6fZrnvtxDNjZmnupfhLW3vcgQkGFfk3aSbwvVuL7/exec";
function showHome(){

document.body.innerHTML=`

<div class="container">

<h1>🤸 体育チャレンジ</h1>

<h2>マット運動ビンゴ</h2>

<button onclick="showStudentStart()">
👦 児童用で始める
</button>

<button onclick="openTeacherPage()">

👨‍🏫 教師用画面

</button>

</div>

`;

}
function showStudentStart(){

    const name = localStorage.getItem("studentName") || "";
    const grade = localStorage.getItem("studentGrade") || "";
    const className = localStorage.getItem("studentClass") || "";
    const number = localStorage.getItem("studentNumber") || "";

    document.body.innerHTML = `

    <div class="container">

        <h1>👦 児童情報入力</h1>

        <div class="reflectionBox">

            <p>名前</p>
            <input id="studentName" value="${name}">

            <p>学年</p>
            <input id="studentGrade" value="${grade}">

            <p>組</p>
            <input id="studentClass" value="${className}">

            <p>番号</p>
            <input id="studentNumber" value="${number}">

            <br><br>

            <button onclick="saveStudentAndStart()">
            保存してスタート
            </button>

            <button onclick="showHome()">
            ← ホーム
            </button>

        </div>

    </div>

    `;

}
function saveStudentAndStart(){

    localStorage.setItem(
        "studentName",
        document.getElementById("studentName").value
    );

    localStorage.setItem(
        "studentGrade",
        document.getElementById("studentGrade").value
    );

    localStorage.setItem(
        "studentClass",
        document.getElementById("studentClass").value
    );

    localStorage.setItem(
        "studentNumber",
        document.getElementById("studentNumber").value
    );

    showMenu();

}
function showTeacherLogin(){

document.body.innerHTML=`

<div class="container">

<h1>👨‍🏫 教師用ログイン</h1>

<p>パスワードを入力してください</p>

<input id="teacherPassword" type="password">

<button onclick="checkTeacherPassword()">

ログイン

</button>

<button onclick="showHome()">

← ホーム

</button>
</div>

`;

}
function checkTeacherPassword(){

    const password =
        document.getElementById("teacherPassword").value;

    if(password === "1234"){

    localStorage.setItem("teacherLogin","true");

    showTeacherDashboard();

}else{

        alert("パスワードがちがいます");

    }

}
function openTeacherPage(){

    if(localStorage.getItem("teacherLogin") === "true"){

        showTeacherDashboard();

    }else{

        showTeacherLogin();

    }

}
function showTeacherDashboard(){

document.body.innerHTML=`

<div class="container">

<h1>👨‍🏫 教師用画面</h1>

<button onclick="showTeacherMode()">

📊 児童の記録を見る

</button>


<button onclick="showClassRecords()">

👨‍🏫 学級一覧

</button>

<button onclick="clearClassRecords()">

🗑️ 学級一覧を削除

</button>
<button onclick="teacherLogout()">

🚪 ログアウト

</button>

<button onclick="showHome()">

← ホームにもどる

</button>

</div>

`;

}

function showMenu(){

document.body.innerHTML=`

<div class="container">

<h1>🤸 体育チャレンジ</h1>

<h2>運動を選ぼう！</h2>

<button onclick="showMatLevel()">
🤸 マット運動
</button>

<button disabled>🤸‍♂️ 鉄棒</button>

<button disabled>📦 跳び箱</button>

<button disabled>🏊 水泳</button>

</div>

`;

}
function showMatLevel(){

document.body.innerHTML=`

<div class="container">

<h1>🤸 マット運動</h1>

<h2>レベルを選ぼう！</h2>

<button onclick="showLevel1()">

レベル１

</button>

<button>レベル２</button>

<button>レベル３</button>

<br>

<button onclick="showMenu()">

← もどる

</button>

</div>

`;

}
function showLevel1(){
const name = localStorage.getItem("studentName") || "未設定";
const grade = localStorage.getItem("studentGrade") || "";
const className = localStorage.getItem("studentClass") || "";
const number = localStorage.getItem("studentNumber") || "";
let html=`

<div class="container">

<h1>🤸 マット運動 Level1</h1>
<p>

${grade}年
${className}組
${number}番

${name}

</p>

<h2>チャレンジビンゴ</h2>
<div class="scoreBox">

⭐ 得点：<span id="score">0</span> 点<br>

🎉 ビンゴ：<span id="bingo">0</span><br>

📊 達成率：<span id="rate">0</span> %
<br>

</div>

<div class="progressOuter">
    <div class="progressInner" id="progressBar"></div>
</div>
<div id="completeMessage" class="completeMessage"></div>
<div class="bingo">

`;

for(let i=0;i<matLevel1.length;i++){

html+=`

<div class="cell"

onclick="toggle(this)">

${matLevel1[i]}

</div>

`;

}

html += `

</div>
<div id="skillCard" class="skillCard">
    <h2>💡 技のポイント</h2>
    <p>マスを押すと、その技のポイントが表示されます。</p>
</div>
<div class="reflectionBox">

<h2>📝 ふりかえり</h2>

<textarea id="reflection1" placeholder="今日できるようになったことを書こう"></textarea>

<textarea id="reflection2" placeholder="次にがんばりたいことを書こう"></textarea>

<button onclick="saveReflection()">
💾 ふりかえり保存
</button>

<div id="saveMessage"></div>

</div>
<button onclick="showResult()">

📄 結果を見る

</button>

<br>
<button class="resetButton" onclick="resetBingo()">

🔄 最初から

</button>

<br>

<button onclick="showMatLevel()">

←もどる

</button>

</div>

`;

document.body.innerHTML = html;

loadProgress();

loadReflection();

}

function toggle(cell){

    cell.classList.toggle("done");

    showSkillCard(cell.textContent.trim());

    updateScore();

    updateBingo();

    saveProgress();

}
function showSkillCard(skillName){

    const card = document.getElementById("skillCard");

    if(!card){
        return;
    }

    if(skillName === "前転"){

        card.innerHTML = `
            <h2>💡 前転のポイント</h2>
            <p>① 手をしっかりマットにつく</p>
            <p>② あごを引いて、おへそを見る</p>
            <p>③ 背中を丸くして回る</p>
        `;

    }else{

        card.innerHTML = `
            <h2>💡 ${skillName}</h2>
            <p>この技のポイントは、これから追加します。</p>
        `;

    }

}
function updateScore() {

    const done = document.querySelectorAll(".done");

    const score = document.getElementById("score");
    const rate = document.getElementById("rate");
    const progressBar = document.getElementById("progressBar");

    const count = done.length;
    const percent = Math.round((count / 16) * 100);

    if (score) {
        score.textContent = count;
    }

    if (rate) {
        rate.textContent = percent;
    }

    if (progressBar) {
        progressBar.style.width = percent + "%";
    }
 
const completeMessage = document.getElementById("completeMessage");

if (completeMessage) {
    if (count === 16) {
        completeMessage.innerHTML = "🏆 コンプリート！<br>Level1 全クリアおめでとう！";
    } else {
        completeMessage.innerHTML = "";
    }
}
}
function updateBingo() {

    const cells = document.querySelectorAll(".cell");

    const lines = [
        [0,1,2,3],
        [4,5,6,7],
        [8,9,10,11],
        [12,13,14,15],

        [0,4,8,12],
        [1,5,9,13],
        [2,6,10,14],
        [3,7,11,15],

        [0,5,10,15],
        [3,6,9,12]
    ];

    let bingoCount = 0;

    lines.forEach(line => {

        const bingo = line.every(index =>
            cells[index].classList.contains("done")
        );

        if (bingo) {
            bingoCount++;
        }

    });

    const bingo = document.getElementById("bingo");

    if (bingo) {
        bingo.textContent = bingoCount;
    }

}
function saveProgress(){

    const cells = document.querySelectorAll(".cell");

    let progress = [];

    cells.forEach(cell => {

        progress.push(
            cell.classList.contains("done")
        );

    });

    localStorage.setItem(
        "matLevel1",
        JSON.stringify(progress)
    );

}
function loadProgress(){

    const data = localStorage.getItem("matLevel1");

    if(!data){
        return;
    }

    const progress = JSON.parse(data);

    const cells =
        document.querySelectorAll(".cell");

    progress.forEach((done,index)=>{

        if(done){
            cells[index].classList.add("done");
        }

    });

    updateScore();
    updateBingo();

}
function saveReflection(){

    const reflection1 = document.getElementById("reflection1").value;
    const reflection2 = document.getElementById("reflection2").value;

    localStorage.setItem("reflection1", reflection1);
    localStorage.setItem("reflection2", reflection2);

    const saveMessage = document.getElementById("saveMessage");

    if(saveMessage){
        saveMessage.textContent = "保存しました！";
    }

}
function loadReflection(){

    const reflection1 = localStorage.getItem("reflection1");
    const reflection2 = localStorage.getItem("reflection2");

    if(reflection1){
        document.getElementById("reflection1").value = reflection1;
    }

    if(reflection2){
        document.getElementById("reflection2").value = reflection2;
    }

}

function showResult(){

    const done = document.querySelectorAll(".done").length;
    const score = done;
    const rate = Math.round((done / 16) * 100);

    const bingo = document.getElementById("bingo")
        ? document.getElementById("bingo").textContent
        : 0;

    const reflection1 = localStorage.getItem("reflection1") || "";
    const reflection2 = localStorage.getItem("reflection2") || "";

    document.body.innerHTML = `

    <div class="container">

        <h1>📄 結果まとめ</h1>

        <div class="resultBox">

            <p>⭐ 得点：${score} 点</p>

            <p>🎉 ビンゴ：${bingo}</p>

            <p>📊 達成率：${rate}%</p>

            <hr>

            <h2>📝 ふりかえり</h2>

            <p><strong>今日できるようになったこと</strong></p>
            <p>${reflection1}</p>

            <p><strong>次にがんばりたいこと</strong></p>
            <p>${reflection2}</p>

        </div>
<button onclick="window.print()">

🖨️ 印刷する

</button>

<br>
${localStorage.getItem("submitted") === "true"
? "<p>✅送信済みです</p>"
: `<button onclick="sendToSpreadsheet()">

📤 スプレッドシートへ送信

</button>`}

<br>       
<button onclick="showLevel1()">

        ← ビンゴにもどる

        </button>

    </div>

    `;

}
function sendToSpreadsheet(){

    const progress =
        JSON.parse(localStorage.getItem("matLevel1")) || [];

    const score =
        progress.filter(item => item === true).length;

    const lines = [
        [0,1,2,3],
        [4,5,6,7],
        [8,9,10,11],
        [12,13,14,15],
        [0,4,8,12],
        [1,5,9,13],
        [2,6,10,14],
        [3,7,11,15],
        [0,5,10,15],
        [3,6,9,12]
    ];

    let bingo = 0;

    lines.forEach(line => {
        if(line.every(index => progress[index] === true)){
            bingo++;
        }
    });

    const rate = Math.round((score / 16) * 100);

    const data = {
        date: new Date().toLocaleDateString("ja-JP"),
        name: localStorage.getItem("studentName") || "",
        grade: localStorage.getItem("studentGrade") || "",
        className: localStorage.getItem("studentClass") || "",
        number: localStorage.getItem("studentNumber") || "",
        score: score,
        bingo: bingo,
        rate: rate,
        reflection1: localStorage.getItem("reflection1") || "",
        reflection2: localStorage.getItem("reflection2") || ""
    };

    fetch(GAS_MAIN, {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(data)
});

fetch(GAS_BACKUP, {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(data)
});

localStorage.setItem("submitted","true");

alert("送信しました！");

showResult();

}
function showTeacherMode(){
const name = localStorage.getItem("studentName") || "未設定";
const grade = localStorage.getItem("studentGrade") || "";
const className = localStorage.getItem("studentClass") || "";
const number = localStorage.getItem("studentNumber") || "";

    const progressData = localStorage.getItem("matLevel1");
    const reflection1 = localStorage.getItem("reflection1") || "";
    const reflection2 = localStorage.getItem("reflection2") || "";

    let doneCount = 0;
    let bingoCount = 0;

    if(progressData){

        const progress = JSON.parse(progressData);

        doneCount = progress.filter(item => item === true).length;

        const lines = [
            [0,1,2,3],
            [4,5,6,7],
            [8,9,10,11],
            [12,13,14,15],
            [0,4,8,12],
            [1,5,9,13],
            [2,6,10,14],
            [3,7,11,15],
            [0,5,10,15],
            [3,6,9,12]
        ];

        lines.forEach(line => {

            const bingo = line.every(index => progress[index] === true);

            if(bingo){
                bingoCount++;
            }

        });

    }

    const rate = Math.round((doneCount / 16) * 100);
const today = new Date().toLocaleDateString("ja-JP");
    document.body.innerHTML = `

    <div class="container">

        <h1>👨‍🏫 教師モード</h1>

        <div class="resultBox">

            <h2>マット運動 Level1</h2>
            <p>${grade}年 ${className}組 ${number}番</p>
<p>${name}</p>

            <p>⭐ 得点：${doneCount} 点</p>

            <p>🎉 ビンゴ：${bingoCount}</p>

            <p>📊 達成率：${rate}%</p>
           

<button onclick="saveClassRecord()">

➕ 学級記録へ追加

</button>

<br>

<button onclick="showTeacherDashboard()">

← 教師用画面にもどる

</button>

            <hr>

            <h2>📝 児童のふりかえり</h2>

            <p><strong>今日できるようになったこと</strong></p>
            <p>${reflection1 || "まだ入力されていません"}</p>

            <p><strong>次にがんばりたいこと</strong></p>
            <p>${reflection2 || "まだ入力されていません"}</p>

        </div>

               </div>

    </div>

    `;

}

function saveClassRecord(){

    let records =
        JSON.parse(localStorage.getItem("classRecords")) || [];

    const today = new Date().toLocaleDateString("ja-JP");

    const name = localStorage.getItem("studentName") || "";
    const grade = localStorage.getItem("studentGrade") || "";
    const className = localStorage.getItem("studentClass") || "";
    const number = localStorage.getItem("studentNumber") || "";

    const progress =
        JSON.parse(localStorage.getItem("matLevel1")) || [];

    const score =
        progress.filter(item => item === true).length;

    const lines = [
        [0,1,2,3],
        [4,5,6,7],
        [8,9,10,11],
        [12,13,14,15],
        [0,4,8,12],
        [1,5,9,13],
        [2,6,10,14],
        [3,7,11,15],
        [0,5,10,15],
        [3,6,9,12]
    ];

    let bingo = 0;

    lines.forEach(line => {
        if(line.every(index => progress[index] === true)){
            bingo++;
        }
    });

    const rate = Math.round((score / 16) * 100);

    const record = {
        date: today,
        name: name,
        grade: grade,
        className: className,
        number: number,
        score: score,
        bingo: bingo,
        rate: rate
    };

    records.push(record);

    localStorage.setItem("classRecords", JSON.stringify(records));

    alert("学級記録に追加しました！");

    showClassRecords();

}

function showStudentSetting(){

    const name =
        localStorage.getItem("studentName") || "";

    const grade =
        localStorage.getItem("studentGrade") || "";

    const className =
        localStorage.getItem("studentClass") || "";

    const number =
        localStorage.getItem("studentNumber") || "";

    document.body.innerHTML = `

    <div class="container">

        <h1>⚙️ 児童情報設定</h1>

        <div class="reflectionBox">

            <p>名前</p>

            <input id="studentName"
            value="${name}">

            <p>学年</p>

            <input id="studentGrade"
            value="${grade}">

            <p>組</p>

            <input id="studentClass"
            value="${className}">

            <p>番号</p>

            <input id="studentNumber"
            value="${number}">

            <br><br>

            <button onclick="saveStudentInfo()">

            💾 保存

            </button>

            <br>

            <button onclick="showHome()">

            ← ホーム

            </button>

        </div>

    </div>

    `;

}
function saveStudentInfo(){

    localStorage.setItem(
        "studentName",
        document.getElementById(
            "studentName"
        ).value
    );

    localStorage.setItem(
        "studentGrade",
        document.getElementById(
            "studentGrade"
        ).value
    );

    localStorage.setItem(
        "studentClass",
        document.getElementById(
            "studentClass"
        ).value
    );

    localStorage.setItem(
        "studentNumber",
        document.getElementById(
            "studentNumber"
        ).value
    );

    alert("保存しました！");

}

function resetBingo(){

    const cells = document.querySelectorAll(".cell");

    cells.forEach(cell => {
        cell.classList.remove("done");
    });

localStorage.removeItem("matLevel1");
localStorage.removeItem("submitted");
localStorage.removeItem("reflection1");
localStorage.removeItem("reflection2");

updateScore();
updateBingo();

}
function showClassRecords(){

    const records =
        JSON.parse(
            localStorage.getItem("classRecords")
        ) || [];

    let html = `

    <div class="container">

    <h1>👨‍🏫 学級一覧</h1>

    <div class="resultBox">

    <table border="1"
    style="width:100%;border-collapse:collapse;">

    <tr>

       <th>名前</th>

       <th>得点</th>

       <th>ビンゴ</th>

       <th>達成率</th>

       <th>日付</th>

    </tr>

    `;

    records.forEach(record => {

        html += `

   <tr>

    <td>${record.name}</td>

    <td>${record.score}</td>

    <td>${record.bingo}</td>

    <td>${record.rate}%</td>

    <td>${record.date}</td>

</tr>

        `;

    });

    html += `

    </table>

    <br>
<button onclick="downloadClassCsv()">

📄 CSVダウンロード

</button>

<br>
    <button onclick="showTeacherDashboard()">

← 教師用画面にもどる

</button>

    </div>

    </div>

    `;

    document.body.innerHTML = html;
}
function clearClassRecords(){

    localStorage.removeItem("classRecords");

    alert("学級一覧を削除しました！");

   showTeacherDashboard();

}
function downloadClassCsv(){

    const records =
        JSON.parse(
            localStorage.getItem("classRecords")
        ) || [];

    if(records.length === 0){

        alert("学級記録がありません。");

        return;

    }

    let csv =
        "日付,名前,学年,組,番号,得点,ビンゴ,達成率\n";

    records.forEach(record => {

        csv +=
            `${record.date},${record.name},${record.grade},${record.className},${record.number},${record.score},${record.bingo},${record.rate}\n`;

    });

    const bom = "\uFEFF";

const blob =
    new Blob(
        [bom + csv],
        { type: "text/csv;charset=utf-8;" }
    );

    const url =
        URL.createObjectURL(blob);

    const link =
        document.createElement("a");

    link.href = url;

    link.download = "体育チャレンジ_学級記録.csv";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);

}
function teacherLogout(){

    const result =
        confirm("ログアウトしますか？");

    if(result){

        localStorage.removeItem("teacherLogin");

        showHome();

    }

}

showHome();
