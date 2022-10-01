//DOM Elements 
let startButton = document.getElementById('start-button');
let nextButton = document.getElementById('next-button');
let questionContainerEl = document.getElementById('question-container');
let answerButtonsEl = document.getElementById('answer-buttons');
let questionEl = document.getElementById('question');
let timeEl = document.querySelector("timer");


//This is the event listener for the start button 
startButton.addEventListener('click', startGame)


//This function will start the game 
function startGame(event) {

startButton.classList.add('hide')
questionContainerEl.classList.remove('hide')

 let shuffledQuestions = questions.sort()
 let currentQuestionIndex = ""; 

  for (let i = 0; i < questions.length; i++) {
  currentQuestionIndex += Math.floor(Math.random()+5)
  } return; currentQuestionIndex 

  questions.indexOf()

  forNextQuestion()

}


function forNextQuestion() {
  //resetQuestion()
displayQuestion(shuffledQuestions[currentQuestionIndex]);

//nextButton.classList.remove('hide') 

}

function displayQuestion(question) {

 questionEl.innerText = questions.question
 
 /* questions.answers.forEach(answers => {
  
  let button = document.createElement('button')

  button.innerText = answers.text
  button.classList.add('btn')

  if (answer.correct) {
    button.dataset.correct = answers.correct
  } 

  button.addEventListener('click', selectAnswer)

  answer.buttonElement.appendChild(button)
 })
  //console.log(questions.question);
 // questionEl.text = gameQuestions.question
*/ 

} 


const questions = [
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
let timeEl = document.querySelector("timer");

// Selects element by id
let timerAppend = document.getElementById(".timer-placement");

let secondsLeft = 30;

function setTime() {
  // Sets interval in letiable
  let timerInterval = setInterval(function() {
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