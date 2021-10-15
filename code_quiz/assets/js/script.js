// import { questions } from "./js/questions.js";
// Initiations:
var startEl = document.querySelector("#start"); // introductory text
var quizEl = document.querySelector("#quiz"); // section for questions
var questionEl = document.querySelector("#question"); // question text itself
var scoreEl = document.querySelector("#score"); // final score

var timerEl = document.querySelector("#timer"); // time
var questionCount = 0; // how many questions answered already
var corrWro = document.querySelector("#corr-wro");
var endEl = document.querySelector("#end");
var userInitials = document.querySelector("#initials");
var highScoresEl = document.querySelector("#highscores");
var scoreListEl = document.querySelector("#score-list");
var scoreList = []; // array of scores

// Buttons:
var viewScoresBtn = document.querySelector("#view-highscores");
var startBtn = document.querySelector("#start-btn"); // starts the quiz
var option1Btn = document.querySelector("#option1"); // answer option 1
var option2Btn = document.querySelector("#option2");
var option3Btn = document.querySelector("#option3");
var option4Btn = document.querySelector("#option4");
var submitBtn = document.querySelector("#submit-score");
var goBackBtn = document.querySelector("#goback");
var clearScoresBtn = document.querySelector("#clearscores");

// var lastQuestion = question.length - 1;
// var runningQuestion = 0;
// timerEl.textContent = "Time: 0";
// var quizContainer = document.querySelectorAll("quiz");

// Functions:

// Timer function
startCountDown = function () {
  var count = 5;

  // define the countdown function
  var countDown = setInterval(function () {
    timerEl.textContent = "Time: " + count; // display the count value in html
    count--; // decrement the count value

    if (count < -1) {
      clearInterval(timer); // kill timer
      timerEl.textContent = "Time: 0"; // reset the timer element
      quizEl.getElementsByClassName.display = "none"; // questions section disappears
      endEl.style.display = "block";
    }
  }, 1000);
};
//startCountDown();  TEST

// // Display the questions
// function displayQuestions(questions, quizContainer) {
//   // Variables to store the output and answers
//   var answers = [];
//   var currentQuestion;

//   for (var i = 0; i < questions.length; i++) {
//     currentQuestion = questions[i];
//   }
//   return currentQuestion;
//   // if correctAnswer clicked, store in "answers"
// }
// displayQuestions();

// Generate the quiz
//generateQuiz(); // TBC
