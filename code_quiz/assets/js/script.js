// import { questions } from "./js/questions.js";
// Initiations:
var startEl = document.querySelector("#start"); // introductory text
var quizEl = document.querySelector("#quiz"); // section for questions
var questionEl = document.querySelector("#question"); // question text itself
var scoreEl = document.querySelector("#score"); // final score

var timerEl = document.querySelector("#timer"); // time
var questionCount = 0; // how many questions answered already
var corrWroEl = document.querySelector("#corr-wro");
var endEl = document.querySelector("#end");
var userInitials = document.querySelector("#initials");
var highScoresEl = document.querySelector("#highscores");
var scoreListEl = document.querySelector("#score-list");
var scoreList = []; // array of scores

// Buttons:
var viewScoresBtn = document.querySelector("#view-highscores");
var startBtn = document.querySelector("#start-quiz"); // starts the quiz
var option1Btn = document.querySelector("#option1"); // answer option 1
var option2Btn = document.querySelector("#option2");
var option3Btn = document.querySelector("#option3");
var option4Btn = document.querySelector("#option4");
var optionBtn = document.querySelectorAll(".option-btn");
var submitBtn = document.querySelector("#submit-score");
var goBackBtn = document.querySelector("#goback");
var clearScoresBtn = document.querySelector("#clearscores");

console.log(questions);
// var questions = [
//   {
//     question: "What is the text of Question 1?",
//     options: ["1. text1", "2. text2", "3. text3", "4. text4"],
//     correctAnswer: "1",
//   },
//   {
//     question: "What is the text of Question 2?",
//     options: ["1. text1", "2. text2", "3. text3", "4. text4"],
//     correctAnswer: "2",
//   },
//   {
//     question: "What is the text of Question 3?",
//     options: ["1. text1", "2. text2", "3. text3", "4. text4"],
//     correctAnswer: "3",
//   },
//   {
//     question: "What is the text of Question 4?",
//     options: ["1. text1", "2. text2", "3. text3", "4. text4"],
//     correctAnswer: "4",
//   },
// ];

// Functions, eventListeners:
quizEl.style.display = "none";
endEl.style.display = "none";
scoreEl.style.display = "none";
highScoresEl.style.display = "none";

var countDown;
// Timer function
startCountDown = function () {
  var count = 15;
  timerEl.textContent = "Time: " + count;
  // define the countdown function
  countDown = setInterval(function () {
    timerEl.textContent = "Time: " + count; // display the count value in html
    count--; // decrement the count value

    if (count < -1) {
      clearInterval(countDown); // kill timer
      quizEl.style.display = "none";
      timerEl.textContent = "Time: 0"; // reset the timer element
      quizEl.getElementsByClassName.display = "none"; // questions section disappears
      endEl.style.display = "block";
    }
  }, 1000);
};
//startCountDown();  TEST

// Display the questions & start the quiz

function displayQuestions() {
  startEl.style.display = "none";
  quizEl.style.display = "block";
  //questionCount = 0;

  startCountDown();
  showQuestion();
}

// Show the questions
function showQuestion() {
  if (questionCount < questions.length) {
    questionEl.textContent = questions[questionCount].question;
    option1Btn.textContent = questions[questionCount].options[0];
    option2Btn.textContent = questions[questionCount].options[1];
    option3Btn.textContent = questions[questionCount].options[2];
    option4Btn.textContent = questions[questionCount].options[3];
  } else {
    clearInterval(countDown); // kill timer
    quizEl.style.display = "none";
    timerEl.textContent = "Time: 0"; // reset the timer element
    quizEl.getElementsByClassName.display = "none"; // questions section disappears
    endEl.style.display = "block";
  }
}

// EventListeners
startBtn.addEventListener("click", displayQuestions);

optionBtn.forEach((item) => {
  item.addEventListener("click", checkAnswer);
});

// Function: Check the answers

function checkAnswer(event) {
  event.preventDefault();

  corrWroEl.style.display = "block";
  var p = document.createElement("p");
  corrWroEl.appendChild(p);

  // corrwro disappear after 1 second
  setTimeout(function () {
    p.style.display = "none";
  }, 1000);

  // checks if correct / wrong

  if (questions[questionCount].correctAnswer === event.target.value) {
    p.textContent = "Correct!";
  } else if (questions[questionCount].correctAnswer !== event.target.value) {
    countDown = countDown - 2;
    p.textContent = "Wrong!";
  }

  // questions index increases
  if (questionCount < questions.length) {
    questionCount++;
  }

  showQuestion(questionCount);
}
