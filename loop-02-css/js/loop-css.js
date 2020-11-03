'use strict';
document.write('<table>');
document.write('<tr>');
for(let i = 0; i <= 8; i++) {
    if(i % 2 === 0) {
        document.writeln('<td id="on">');
    } else {
        document.writeln('<td id="off">');
    }
    document.writeln(i);
    console.log(i);
    document.writeln('</td>');
}
document.write('</tr>');
document.write('</table>');
