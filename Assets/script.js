
/* Timer Function */ 
// Selects element by class
var timeEl = document.querySelector("timer");

// Selects element by id
var timerAppend = document.getElementById(".timer-placement");

var secondsLeft = 30;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + "Second's Left ";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      alert("Time's Up!");
      //change this
    }

  }, 1000);

  timerAppend.appendChild(setTime);
}

setTime();