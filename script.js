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






var reset = document.getElementById("reset");
reset.onclick = resetTimer();

window.onload = init;