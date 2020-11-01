"use strict";

// 現在日時を取得
let today = new Date();
// 現在日時を編集してHTMLに出力
let year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();
let dayOfTheWeek = today.getDay(); // ０〜６の数値を得る
let weekday = ["日", "月", "火", "水", "木", "金", "土"];
document.write(
    year +
    "年" +
    month +
    "月" +
    day +
    "日" +
    "(" +
    weekday[dayOfTheWeek] +
    ")<br>"
);

// <h1 onclick="greet()">Welcome!</h1>
const greet = function () {
    window.alert("ようこそJavaScriptの世界へ！");
};

// サイコロの目をランダムに取得する
let dice = parseInt(Math.random() * 6 + 1);
document.write("サイコロの目は" + dice + "です。<br>");

let businessHours = today.getHours();
if (businessHours >= 9 && businessHours < 17) {
    document.write('営業中です！');
} else {
    document.write('本日の営業は終了しました。');
}
