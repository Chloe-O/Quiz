// questions courtesy of >>> https://gist.github.com/cmota/f7919cd962a061126effb2d7118bec72

fetch("/questions.json")
  .then((response) => response.json())
  .then((json) => console.log(json[0].question));

let startQuizBtn = document.getElementById("start-quiz-btn");

startQuizBtn.addEventListener("click", () => {
  console.log("clicked!");

  document.getElementById("start-screen").style.display = "none";
  document.getElementById("questions-screen").style.display = "block";
});
