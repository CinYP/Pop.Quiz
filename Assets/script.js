var startButton = document.getElementById('start-button');
var nextButton = document.querySelector('nxt-btn');
var questionContainerEl = document.getElementById('question-container');
const gameQuestions = [
  {
    question:"What was the name of Scooby-Doo's original TV series?",
    answers: [
      {text: 'Scooby-Doo, Where Are You', correct: true },
      {text: 'Mystery Incorporated', correct: false }, 
      {text: 'The Scooby-Doo Show', correct:false },
      {text: 'Scooby Doooooo', correct: false }
    ]
  }
]

//This is the event listener for the start button 
startButton.addEventListener('click', startGame)

//This function will start the game 
function startGame() {
//console.log('Test');
//Testing to see if the event listener is invoking our function

startButton.classList.add('hide')
//hiding the start button when the game starts bc we no longer need it
questionContainerEl.classList.remove('hide')
//showing the questions that to start the game 

forNextQuestion()
//this will show the trivia questions 

}




//This is a function for selecting the user to select an answer 
function selectingAnswer() {

}

//This is a function for the next question - what happens when we click next 
function forNextQuestion() {

}


let questions = [
  {
    question:"What was the name of Scooby-Doo's original TV series?",
    answers: [
      {text: 'Scooby-Doo, Where Are You', correct: true },
      {text: 'Mystery Incorporated', correct: false }, 
      {text: 'The Scooby-Doo Show', correct:false },
      {text: 'Scooby Doooooo', correct: false }
    ]
  }, 
  {
    question:"What kind of dog is Scooby Doo?",
    answers: [
      {text: 'A Good Boy', correct: true },
      {text: 'Great Dane', correct: true }, 
      {text: 'Labrador Dalmation Mix', correct:false },
      {text: 'Chihuahua', correct: false }
    ]
  }, 
  {
    question:"From which artist did Scooby Doo get it's name from?",
    answers: [
      {text: 'Frank Sinatra', correct: true },
      {text: 'Ella Fitzgerald', correct: false }, 
      {text: 'Louis Armstrong', correct:false },
      {text: 'Billie Holiday', correct: false }
    ]
  }, 
  {
    question:"Scooby got his name from which Sinatra song?",
    answers: [
      {text: 'The Lady is a Tramp', correct: false },
      {text: 'Stanger in the night', correct: true }, 
      {text: 'I get a kick out of you', correct:false },
      {text: 'My Funny Valentine', correct: false }
    ]
  }, 
  {
    question:"What color is Daphne's dress",
    answers: [
      {text: 'purple', correct: false },
      {text: 'green', correct: true }, 
      {text: 'orange', correct:false },
      {text: 'pink', correct: false }
    ]
  }, 
]






/* Timer Function 
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
*/ 