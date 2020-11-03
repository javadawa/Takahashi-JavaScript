"use strict";
document.write("<table>");
document.write("<tr>");
for (let i = 0; i <= 8; i++) {
  if (i % 2 === 0) {
    document.writeln('<td id="on">');
  } else {
    document.writeln('<td id="off">');
  }
  document.writeln(i);
  console.log(i);
  document.writeln("</td>");
}
document.write("</tr>");
document.write("</table>");
document.write("<br>");
document.write("hello!");
document.write("<br>");

// document.write('<table>');
// for (let i = 1; i <= 3; i++) {
//   document.write('<tr>');
//   for (let j = 1; j <= 3; j++) {
//     document.write('<td>' + i * j + '</td>');
//   }
//   document.write('</tr>');
// }
// document.write('</table>');

document.write('<table>');
for (let i = 1; i <= 5; i++) {
  document.write('<tr>');
  for (let j = 1; j <= 5; j++) {
    if ((i % 2 === 1 && j % 2 === 1) || (i % 2 ===0 && j % 2 === 0)) {
        document.write('<td id="on">' + i * j + '</td>')
    } else {
        document.write('<td>' + i * j + '</td>');
    }
  }
  document.write('</tr>');
}
document.write('</table>');
