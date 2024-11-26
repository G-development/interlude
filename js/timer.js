var countup = document.querySelector("#countup");
var countup_date = Date.parse('15 Nov 2024 12:04:00 GMT+1');

var antonio = document.querySelector("#antonio");
var antonio_date = Date.parse('07 Feb 2001 08:30:00 GMT+1');

// target_date = new Date().getTime(); // set the countdown date

si = setInterval(function () { getCountdown(countup, countup_date); }, 1000);
si = setInterval(function () { getCountdown(antonio, antonio_date); }, 1000);

function getCountdown(element, date) {
    target_date = date;
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (current_date - target_date) / 1000;

    // calculate years
    var years = pad(Math.floor(seconds_left / (365.25 * 86400)));
    seconds_left = seconds_left % (365.25 * 86400);

    // calculate months (approximating to 30.44 days per month)
    var months = pad(Math.floor(seconds_left / (30.44 * 86400)));
    seconds_left = seconds_left % (30.44 * 86400);

    days = pad(parseInt(seconds_left / 86400));
    seconds_left = seconds_left % 86400;

    hours = pad(parseInt(seconds_left / 3600));
    seconds_left = seconds_left % 3600;

    minutes = pad(parseInt(seconds_left / 60));
    seconds = pad(parseInt(seconds_left % 60));

    element.innerHTML = '<span>' + years + '</span>:<span>' + months + '</span>:<span>' + days + '</span>:<span>' + hours + '</span>:<span>' + minutes + '</span>:<span>' + seconds + '</span>';
}

function pad(n) {
    return (n < 10 ? '0' : '') + n;
}
