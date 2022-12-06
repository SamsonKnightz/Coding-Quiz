
var timeEl = document.getElementById("time");
var secondsLeft = 60;

function displayMessage() {
    if (secondsLeft === 1) {
    }
    timeEl.textContent = secondsLeft + " " + "seconds";
}

function setTime() {
    displayMessage();
    timeEl.textContent = secondsLeft + "seconds";
    var timerInterval = setInterval(function () {
        secondsLeft--;
        displayMessage();
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            return alert("Failure to finish");
        }
    }, 1000);
}

setTime()

