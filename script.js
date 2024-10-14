"use strict";
let guess = document.querySelector(".guess");
let secretNumber = Math.trunc(Math.random() * 100) + 1;
let message = document.querySelector(".message");
const check = document.querySelector(".check");
const again = document.querySelector(".again");
const highScore = document.querySelector(".highscore");
let score = 100;
let highscore = 0;

const checkGuess = function () {
  const inputNumber = Number(document.querySelector(".inputNumber").value);
  if (!inputNumber) {
    message.textContent = "⛔No Number";
  } else if (inputNumber === secretNumber) {
    guess.textContent = secretNumber;
    message.textContent = "🎉Correct Number";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    document.querySelector(".container").style.backgroundColor = "green";
  } else if (inputNumber !== secretNumber) {
    if (score > 1) {
      message.textContent =
        inputNumber > secretNumber ? "📈Too High" : "📉Too Low";
      score -= 1;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "You Lost The Game!";
      document.querySelector(".score").textContent = 0;
    }
  }
  document.querySelector(".inputNumber").value = "";
};

check.addEventListener("click", checkGuess);
again.addEventListener("click", function () {
  score = 100;
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  guess.textContent = secretNumber;
  document.querySelector(".container").style.backgroundColor = "#312f2f";
  message.textContent = "🤔Start Guessing!";
  document.querySelector(".score").textContent = score;
  document.querySelector(".inputNumber").value = "";
  guess.textContent = "?";
});

document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    checkGuess();
    document.querySelector(".inputNumber").value = "";
  }
});
