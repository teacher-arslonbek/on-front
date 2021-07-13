// DOM elements
const order_number = document.querySelector(".order_number");
const timer = document.querySelector("#timer");
const number_1 = document.querySelector("#number_1");
const number_2 = document.querySelector("#number_2");
const operation = document.querySelector("#operation");
const answers_content = document.querySelector(".answer_content");
const points_content = document.querySelector(".points_content");
// Logic vars

// render functions
function renderQuestion() {}
// logic functions
function randomNumber(point = 0, interval = 200) {
  const inervals = [point - interval, point + interval];
  return Math.floor(Math.random() * inervals[Math.floor(Math.random() * 2)]);
}
console.log("randomNumber : ", randomNumber());
console.log("randomNumber : ", randomNumber());
console.log("randomNumber : ", randomNumber());
console.log("randomNumber : ", randomNumber());
console.log("randomNumber : ", randomNumber());
