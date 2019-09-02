//Timer object

var timer = {
    state: "stopped",
    sessionLength: 25,
    breakLength: 5,
    timeLeft: 25
};

//start timer

//stop timer

//increment break / session

//decrement break / session


var breakTime = document.getElementById("break-time");
var sessionTime = document.getElementById("session-time");
var timeLeft = document.getElementById("time-left");

function resetTimer() {
    breakTime.innerHTML = 5;
    sessionTime.innerHTML = 25;
    timeLeft.innerHTML = 25 + ":00";
}

function init() {
    resetTimer();

}

function increment(clicked_id) {
    if (clicked_id == "session-increment") {
        var x = sessionTime += 1;
        document.getElementById("session-time").innerHTML = x;
    }
    else {
        var x = breakTime += 1;
        breakTime.innerHTML = x;
    }
    console.log(x);
}

function decrement(clicked_id) {
    if (clicked_id == "session-decrement") {
        var x = sessionTime -= 1;
        sessionTime.innerHTML = x;
    }
    else {
        var x = breakTime -= 1;
        breakTime.innerHTML = x;
    }
}

window.onload = init;