//Functions

function increment(clicked_id) {
    if (clicked_id == "session-increment") {
        if (timer.sessionLength < 60) {
            timer.sessionLength += 1;
            document.getElementById("session-time").innerHTML = timer.sessionLength.toString();
        }
    }
    else {
        if (timer.breakLength < 60) {
            timer.breakLength += 1;
            document.getElementById("break-time").innerHTML = timer.breakLength.toString();
        }
    }
}

function decrement(clicked_id) {
    if (clicked_id == "session-decrement") {
        if (timer.sessionLength > 1) {
            timer.sessionLength -= 1;
            document.getElementById("session-time").innerHTML = timer.sessionLength.toString();
        }
    }
    else {
        if (timer.breakLength > 1) {
            timer.breakLength -= 1;
            document.getElementById("break-time").innerHTML = timer.breakLength.toString();
        }
    }
}

//start and stop timer

function startStop() {
    timer.state = "running";
    while ((timer.state == "running") && document.getElementById("time-left").innerHTML != "00:00") {
        window.setInterval(updateTimeLeft(), 1000);
        document.getElementById("time-left").onclick = stopTimer();
    }
}

function updateTimeLeft(){
}

function stopTimer() {
    timer.state = "stopped";
}

function reset() {
    timer.state = "stopped";
    timer.sessionLength = 25;
    timer.breakLength = 5;
    timer.timeLeft = 25;
    updateView();
}

function updateView() {
    breakTime.innerHTML = timer.breakLength;
    sessionTime.innerHTML = timer.sessionLength;
    timeLeft.innerHTML = timer.timeLeft + ":00";
}

function init() {
    updateView();

}

//Timer

var timer = {
    state: "stopped",
    sessionLength: 25,
    breakLength: 5,
    minLeft: 25,
    secLeft: 0
};

//Elements to update

var breakTime = document.getElementById("break-time");
var sessionTime = document.getElementById("session-time");
var timeLeft = document.getElementById("time-left");

window.onload = init;