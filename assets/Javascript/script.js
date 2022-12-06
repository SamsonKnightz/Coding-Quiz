
var timeEl = document.getElementById("time");

var secondsLeft = 60;

function setTime(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = secondsLeft + "seconds.";
        if(secondsLeft === 0){
            clearInterval(timerInterval);
            return alert("Failure to finish");
        }
    }, 1000);
}

setTime()

