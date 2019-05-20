var clock_div = document.getElementById("clock");
var old_seconds;
window.setInterval(function () {
    var date = new Date();
    var seconds = date.getSeconds();
    if (seconds != old_seconds) {
        clock_div.innerText = date.Format("hh:mm:ss");
        old_seconds = seconds;
    }
}, 100);

var date_div = document.getElementById("date");
var weekday = ["日", "一", "二", "三", "四", "五", "六"];
function DateDiv() {
    var date = new Date();
    if (date.Format("MM-dd") < "06-07") {
        var year = date.getFullYear();
    } else {
        var year = date.getFullYear() + 1;
    }
	var date_str = date.Format("yyyy-MM-dd");
    var countdown = DateMinus(date_str, year + "-06-07");
	var date_str_fmt = date.Format("yyyy年MM月dd日");
    date_div.innerText = date_str_fmt + " 星期" + weekday[date.getDay()] + " 距离" + year + "年高考还有" + countdown + "天";
}
DateDiv();
window.setInterval(function () {
    DateDiv();
}, 60000);
