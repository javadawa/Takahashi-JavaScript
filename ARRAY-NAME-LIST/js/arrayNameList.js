'use strict';

let name = ['mike', 'nick', 'john'];
document.write('<ol>');
for(let i = 0; i < name.length; i++) {
    document.write('<li>');
    document.write(name[i]);
    document.write('</li>');
}
document.write('</ol>');
