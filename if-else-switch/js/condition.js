"use strict";
// document.write("<div>" + "Welcome!" + "</div>");
let dateTime = new Date();
let dayWeek = dateTime.getDay();

if (dayWeek === 0) {
    document.write('本日休業');
} else if (dayWeek === 6) {
    document.write('午前中のみ営業');
} else {
    document.write('１７時まで営業');
}

switch (dayWeek) {
    case 0:
        document.write('　（日曜日）');
        break;
    case 6:
        document.write('　（土曜日）');
        break;
    default:
        document.write(' （平日）');
        break;
}
