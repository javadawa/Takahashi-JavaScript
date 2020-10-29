'use strict';

// 現在日時を取得
let today = new Date();
// 現在日時を編集してHTMLに出力
let year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();
let dayOfTheWeek = today.getDay();
let weekday = ['日', '月', '火', '水', '木', '金', '土'];
document.write(year + '年' + month + '月' + day + '日' + '(' + weekday[dayOfTheWeek] + ')');

const greet = function() {
    window.alert("ようこそJavaScriptの世界へ！");
}
// greet();
