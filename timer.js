var countup = document.querySelector("#countup");
var date = Date.parse('15 Nov 2024 12:04:00 GMT+1');

// target_date = new Date().getTime(); // set the countdown date
target_date = date;
si = setInterval(function () { getCountdown(); }, 1000);

function getCountdown() {

    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (current_date - target_date) / 1000;

    days = pad(parseInt(seconds_left / 86400));
    seconds_left = seconds_left % 86400;

    hours = pad(parseInt(seconds_left / 3600));
    seconds_left = seconds_left % 3600;

    minutes = pad(parseInt(seconds_left / 60));
    seconds = pad(parseInt(seconds_left % 60));

    countup.innerHTML = '<span>' + days + '</span>:<span>' + hours + '</span>:<span>' + minutes + '</span>:<span>' + seconds + '</span>';
}

function pad(n) {
    return (n < 10 ? '0' : '') + n;
}