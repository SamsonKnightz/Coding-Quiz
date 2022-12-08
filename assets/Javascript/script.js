//---linking "time" <div> in html
var timeEl = document.getElementById("time");
var secondsLeft = 60;
//---set up display message function to display the timer
function displayMessage() {
    if (secondsLeft === 1) {
    }
    timeEl.textContent = secondsLeft + " " + "seconds";
}
//---set a timer on the webpage after 60 seconds, clear timer interval and return an alert.
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

