const user = localStorage.getItem("userName");
console.log(user);
let myUser = document.querySelector("#myUser");
myUser.innerHTML = user;
const welcomeMsg = document.querySelector(".welcomeMsg");
const question = document.querySelector(".question");
const option = document.querySelectorAll(".option");
const btn = document.querySelector("#nextBtn");
const existBtn = document.querySelector("#finish");
const content = document.querySelector(".content");
const result = document.querySelector("#result");
const quizNumber = document.querySelector("#quizIndex");

const quiz = [
  {
    question: "when is ES6 (ECMAScript 6) javascript officially released",
    options: ["May 2015", "July 2009", "June 2015"],
    correctOption: "June 2015",
  },
  {
    question:
      "Which of the following statements about closures in JavaScript is true?",
    options: [
      "Closures can only be created inside classes.  ",
      "Closures allow a function to have access to variables from its outer (enclosing) scope",
      "Closures can only be used with asynchronous code",
    ],
    correctOption:
      "Closures allow a function to have access to variables from its outer (enclosing) scope",
  },
  {
    question:
      "What will be the output of the following code?let x = 10;let y = (x > 5) ? 'Hello' : 'World';console.log(y);",
    options: ["Hello", "World", "true"],
    correctOption: "Hello",
  },
  {
    question: "What does the 'use strict' mode in JavaScript do?",
    options: [
      "It allows for more relaxed syntax rules.",
      "It enforces stricter parsing and error handling in the code",
      "It enables automatic type conversion.",
    ],
    correctOption:
      "It enforces stricter parsing and error handling in the code",
  },
  {
    question:
      "What will be the output of the following code? console.log(2 + '2' - 1)",
    options: ["21", "1", "23"],
    correctOption: "21",
  },
  {
    question:
      "What is the purpose of the `addEventListener` method in JavaScript?",
    options: [
      "To create new HTML elements.",
      "To handle asynchronous operations.  ",
      "To register event handlers for HTML elements.",
    ],
    correctOption: "To register event handlers for HTML elements.",
  },
  {
    question:
      "Which of the following is a valid way to create a copy of an array in JavaScript?",
    options: ["arr.slice()", "arr.clone() ", "arr.copy()"],
    correctOption: "arr.slice()",
  },
  {
    question:
      "What is the purpose of the `localStorage` object in web development?",
    options: [
      "To store session data on the server",
      "To cache images and stylesheets ",
      "To store key-value pairs locally in the browser.",
    ],
    correctOption: "To store key-value pairs locally in the browser.",
  },
  {
    question:
      "What will be the value of `result` in the following code?let result = [1, 2, 3] + [4, 5, 6];",
    options: ["123456", "[1, 2, 3, 4, 5, 6] ", " 21"],
    correctOption: "123456",
  },
  {
    question: "What is the purpose of the `Promise` object in JavaScript?",
    options: [
      "To define classes and objects",
      "To represent a value that might be available now, or in the future, or never",
      " To handle errors in the code.  ",
    ],
    correctOption:
      "To represent a value that might be available now, or in the future, or never",
  },
];
let sum = 0;
let questionIndex = 0;
let lastIndex = quiz.length - 1;
existBtn.style.display = "none";
const showQuiz = () => {
  let optionsHtml = "";
  quiz[questionIndex].options.forEach((option, index) => {
    optionsHtml += `<p id='option-${index}' onclick="validateOption('${option}','${quiz[questionIndex].correctOption}',${index})" class="option">
          ${quiz[questionIndex].options[index]}

          `;
  });
  content.innerHTML = `
       <p class="question">${quiz[questionIndex].question}</p>
        ${optionsHtml}
        <p class="primaryStyle" id="quizIndex">${questionIndex + 1}/${
    quiz.length
  }</p>
    `;
};
const validateOption = (option, correctOption, index) => {
  btn.style.display = "block";

  if (option == correctOption) {
    document.querySelector(`#option-${index}`).style.backgroundColor = "green";
    document.querySelector(`#option-${index}`).style.color = "white";
    sum += 1;
  } else {
    let correctOptionIndex = quiz[questionIndex].options.findIndex(
      (option) => option == correctOption
    );
    document.querySelector(
      `#option-${correctOptionIndex}`
    ).style.backgroundColor = "green";
    document.querySelector(`#option-${correctOptionIndex}`).style.color =
      "white";
    document.querySelector(`#option-${index}`).style.backgroundColor = "red";
    document.querySelector(`#option-${index}`).style.color = "white";
  }
  if (questionIndex == lastIndex) {
    content.style.display = "none";
    result.innerHTML = `Your Score:${sum}/${quiz.length}`;
    result.style.marginTop = "10rem";
    btn.style.display = "none";
    welcomeMsg.style.display = "none";
    existBtn.style.display = "block";
  }
};

btn.addEventListener("click", function () {
  btn.style.display = "none";
  questionIndex += 1;
  showQuiz();
});

btn.style.display = "none";
showQuiz();
const duration = document.querySelector("#time");
let secs = 300;
let showsAlert = false;
const stopQuiz = () => {
  secs -= 1;
  const min = Math.floor(secs / 60);
  const remainingSec = secs % 60;
  let formattedTime = `${min}:${remainingSec}`;
  duration.innerHTML = formattedTime;
  if (secs <= 60 && !showsAlert) {
    alert("You have one minute left");
    showsAlert = true;
    duration.style.color = "red";
  }
  if (secs == 0) {
    stopTimer();
  }
};
const interval = setInterval(stopQuiz, 1000);
const stopTimer = () => {
  questionIndex == lastIndex;
  content.style.display = "none";
  result.innerHTML = `Your Score:${sum}/${quiz.length}`;
  btn.style.display = "none";
  welcomeMsg.style.display = "none";
  existBtn.style.display = "block";

  clearInterval(interval);
};
