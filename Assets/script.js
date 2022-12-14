//DOM Elements 
let startButton = document.getElementById('start-button');
let nextButton = document.getElementById('next-button');
let questionContainerEl = document.getElementById('question-container');
let answerButtonsEl = document.getElementById('answer-buttons');
let questionEl = document.getElementById('question');
let answerButtonOne = document.getElementById("button-one")
let answerButtonTwo = document.getElementById("button-two")
let answerButtonThree = document.getElementById("button-three")
let answerButtonFour = document.getElementById("button-four")
let timeEl = document.getElementById("timer");
let secondsLeft = 45;


const questions = [
  {
    question:"What was the name of Scooby-Doo's original TV series?",
    answers: [
      {text: "Scooby-Doo, Where Are You", correct:true },
      {text: "Mystery Incorporated", correct:false }, 
      {text: "The Scooby-Doo Show", correct:false },
      {text: "Scooby Doooooo", correct:false }
    ]
  },
  {
    question:"What kind of dog is Scooby Doo?",
    answers: [
      {text: "A Good Boy", correct: true },
      {text: "Great Dane", correct: true }, 
      {text: "Labrador Dalmation Mix", correct:false },
      {text: "Chihuahua", correct: false }
    ]
  }, 
  {
    question:"From which artist did Scooby Doo get it's name from?",
    answers: [
      {text: "Frank Sinatra", correct: true },
      {text: "Ella Fitzgerald", correct: false }, 
      {text: "Louis Armstrong", correct:false },
      {text: "Billie Holiday", correct: false }
    ]
  }, 
  {
    question:"Scooby got his name from which Sinatra song?",
    answers: [
      {text: "The Lady is a Tramp", correct: false },
      {text: "Stanger in the night", correct: true }, 
      {text: "I get a kick out of you", correct:false },
      {text: "My Funny Valentine", correct: false }
    ]
  },
  {
    question:"What color is Daphne's dress",
    answers: [
      {text: "purple", correct: false },
      {text: "green", correct: true }, 
      {text: "orange", correct:false },
      {text: "pink", correct: false }
    ]
  },
]

let shuffledQuestions = questions.sort()
let currentQuestionIndex = 0;

//This is the event listener for the start button 
startButton.addEventListener('click', startGame) 

//This function will start the game 
function startGame(event) {

startButton.classList.add('hide')
questionContainerEl.classList.remove('hide')
timeEl.classList.remove('hide')




function generateRandomIndex() {
  for (let i = 0; i < questions.length; i++) {
    currentQuestionIndex += Math.floor(Math.random()*3)

    return currentQuestionIndex;
  }}

  generateRandomIndex()

  questions.indexOf()

  forNextQuestion()

}

function forNextQuestion() {
  //resetQuestion()
  displayQuestion(shuffledQuestions[currentQuestionIndex]);
  //console.log(currentQuestionIndex);



  function displayQuestion(question) {

    questionEl.innerHTML = questions[currentQuestionIndex].question
   
   } 

  generateButtonText()
  
  //answerButtonsEl.addEventListener('click', selectAnswer)

   
  answerButtonsEl.addEventListener('click', selectAnswer)


  //creating new buttons for all of the answer choices 
  function generateButtonText(){

  answerButtonOne.innerHTML =questions[currentQuestionIndex].answers[0].text
  answerButtonTwo.innerHTML =questions[currentQuestionIndex].answers[1].text
  answerButtonThree.innerHTML =questions[currentQuestionIndex].answers[2].text
  answerButtonFour.innerHTML =questions[currentQuestionIndex].answers[3].text
  }  

}

 function selectAnswer (event){
  //let answerSelection = event.target.getAttribute("data-correct")
  const buttonAction = event.target
  let buttonText = event.target.innerText 
  let selectedAnswer = questions[currentQuestionIndex].answers.find(function(answer){
    return answer.text === buttonText
  })

  if (selectedAnswer.correct === true){
    buttonAction.classList.add('correct')
  } else {
    buttonAction.classList.add('wrong')
  }

  //console.log(questions[currentQuestionIndex].answers);
  //console.log(answerSelection);

  nextButton.classList.remove('hide')
  nextButton.addEventListener('click', resetQuestion)

  
} 

function resetQuestion(){
  console.log("this resets the question");
}

function setTime() {
  startGame()
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.innerHTML = secondsLeft + " seconds left to select an answer.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      //selectAnswer();
    }

  }, 45000);
}

