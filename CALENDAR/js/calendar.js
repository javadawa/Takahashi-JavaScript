'use strict';
let dayWeek = ['日', '月', '火', '水', '木', '金', '土'];
// 月を表示
document.write('<h1>');
let time = new Date();
let month = time.getMonth();
// 月の値は０〜１１
document.write(month + 1 + '月');
document.write('</h1>');

// 月初の曜日を取得
let firstD = new Date(time.getFullYear(), month, 1);
let firstDW = firstD.getDay();

// 月の最終日を取得
let lastDay = new Date(time.getFullYear(), month + 1, 0);

// カレンダーをリストで表示
document.write('<table>');
for (let i = 1; i <= lastDay.getDate(); i++) {
  document.write('<tr>');
  document.write('<td>');
  document.write(i);
  document.write('</td>');
  document.write('<td>');
  // 曜日の値は０〜６
  document.write(dayWeek[(firstDW + i - 1) % 7]);
  document.write('</td>');
  document.write('</tr>');
  console.log(i);
}
document.write('</table>');

