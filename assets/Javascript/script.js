
var timerEl = document.getElementById("timer");

var secondsLeft = 60;

function setTime(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        if(secondsLeft === 0){
            clearInterval(timerInterval);
            return alert("Failure to finish");
        }
    }, 1000);
}

setTime()

