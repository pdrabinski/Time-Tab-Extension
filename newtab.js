var d = new Date();

let time = get_Time();
let date = get_Date();

function get_Time() {
    let hours = d.getHours();
    let minutes = d.getMinutes();
    morning_or_afternoon = " am";
    if (hours > 12) {
        hours = hours - 12;
        morning_or_afternoon = " pm";
    }
    if (minutes < 10) {
        minutes = "0" + minutes.toString();
    }
    let time = hours.toString() + ":" + minutes.toString() + morning_or_afternoon;
    return time
}

function get_Date() {
    let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
                'August', 'September', 'October', 'November', 'December'];

    let day = weekday[d.getDay()];
    let month = months[d.getMonth()];
    let dom = d.getDate();
    let year = d.getFullYear();
    let date = day + " " + month + " " + dom.toString() + ", " + year.toString();
    return date
}

$(document).ready(function() {
    $("#time").html(time);
    $("#date").html(date);

    // let time_html = $("#time");
    // let date_html = $('#date');

    // time_html.innerHTML = time;
    // date_html.innerHTML = date;
});