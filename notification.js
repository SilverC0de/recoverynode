/*===================================
File Name    : notification.js
Description  : Notifications JS.
Version      : 1.6
===================================*/

var times = [3120, 4442, 5224, 7510, 8636, 9002, 10222];
var countries = ['eng','us','fn','can','chi','aus','jap'];
var themeInterval = setInterval('notification()', time());

function time() {
    return   times[parseInt(Math.random()*7)] + 2000;
}
function notification() {
    spop({
        template: '<div class="sale_notification d-flex align-items-center"><img src="   chart_icon.png" alt="" /> <div class="notification_inner"> <h3>'+Math.floor(Math.random()*60000 + 3000)+' ICC</h3><p>Connected in <img src="   '+countries[Math.floor(Math.random()*7)]+'.png" alt="" /></p></div></div>',
        group: 'submit-satus',
		style     : 'nav-fixed',// error or success
        position  : 'bottom-left',
        autoclose: 5000,
        icon: false
    });
    clearInterval(themeInterval);
    themeInterval = setInterval('notification()', time());
}
