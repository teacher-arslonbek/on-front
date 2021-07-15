// DOM elements
const ORDER_NUMBER = document.querySelector(".order_number");
const timer = document.querySelector("#timer");
const NUMBER_1 = document.querySelector("#number_1");
const NUMBER_2 = document.querySelector("#number_2");
const OPERATION = document.querySelector("#operation");
const ANSWERS_CONTENT = document.querySelector(".answers_content");
const points_content = document.querySelector(".points_content");
const start_btn = document.querySelector("#start_btn");
// Logic vars
let testList = [];
let currentTest;
// render functions
function renderQuestion() {
  const { number_1, number_2, operation, correctAnswer } = currentTest;
  NUMBER_1.innerHTML = number_1;
  NUMBER_2.innerHTML = number_2;
  OPERATION.innerHTML = operation;
}

function renderAnswers() {
  const [a, b, c, d] = currentTest.answers;
  ANSWERS_CONTENT.innerHTML = `<div class="row">
  <div class="answer_box" onclick="checkAnswer(${a})">
    <div class="answer_btn">A</div>
    <span class="answer_text">${a}</span>
  </div>
  <div class="answer_box" onclick="checkAnswer(${b})">
    <div class="answer_btn">B</div>
    <span class="answer_text">${b}</span>
  </div>
</div>

<div class="row">
  <div class="answer_box" onclick="checkAnswer(${c})">
    <div class="answer_btn">C</div>
    <span class="answer_text">${c}</span>
  </div>
  <div class="answer_box" onclick="checkAnswer(${d})">
    <div class="answer_btn">D</div>
    <span class="answer_text">${d}</span>
  </div>
</div>`;
}

// logic functions
function randomNumber(myNumber = 0, point = 200) {
  const interval = [myNumber - point, myNumber + point];
  return Math.floor(Math.random() * interval[Math.floor(Math.random() * 2)]);
}

function randomOperation() {
  const operations = ["-", "+", "*"];
  return operations[Math.floor(Math.random() * operations.length)];
} // [+,-,*]

function renderOrderNumber() {
  ORDER_NUMBER.innerHTML = testList.length;
}

/**
 *
 * @param {number} correctAnswer default 25
 * @return [14,-20,25,33]
 */
function randomAnswers(correctAnswer = 25) {
  const answers = [correctAnswer]; // [25,19,22,11]
  for (let i = 0; i < 3; i++) answers.push(randomNumber(correctAnswer, 40));
  return answers.sort(() => Math.random() - 0.5);
}

function checkAnswer(selectAnswer) {
  console.log("selectAnswer = ", selectAnswer);
}

function createTest() {
  const number_1 = randomNumber();
  const number_2 = randomNumber();
  const operation = randomOperation();
  const correctAnswer = eval(`${number_1} ${operation} ${number_2}`);
  const answers = randomAnswers(correctAnswer);
  const test = {
    number_1,
    number_2,
    operation,
    correctAnswer,
    answers,
    answer_status: 0,
  };
  testList.push(test);
  currentTest = test;
}

function startQuizApp() {
  createTest();
  renderQuestion();
  renderAnswers();
  renderOrderNumber();
}

startQuizApp();
