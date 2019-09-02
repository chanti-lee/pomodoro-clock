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
    if (this.id.) {
        sessionTime += 1;
    }
    else {
        breakTime += 1;
    }
}

function decrement(clicked_id) {
    if ((this.id).includes("session")) {
        sessionTime -= 1;
    }
    else {
        breakTime -= 1;
    }
}

window.onload = init;