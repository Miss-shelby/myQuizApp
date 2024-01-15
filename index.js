const insBtn = document.querySelector(".btn-secondary");
const inst = document.querySelector(".Instructions");
insBtn.addEventListener("click", function () {
  inst.style.display = "block";
});
inst.addEventListener("click", function () {
  inst.style.display = "none";
});
const startBtn = document.querySelector("#startBtn");
const userInput = document.querySelector("#userName");
const user = document.querySelector("#user");
startBtn.addEventListener("click", function () {
  let userName = userInput.value;
  localStorage.setItem("userName", userName);
  userName = " ";
});
