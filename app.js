// questions courtesy of >>> https://gist.github.com/cmota/f7919cd962a061126effb2d7118bec72

async function fetchQuestions() {
  const response = await fetch("/questions.json");
  const JSONquestions = await response.json();
  return JSONquestions;
}

const startQuizBtn = document.getElementById("start-quiz-btn");
const answerElement = document.querySelectorAll(".answer");
const a_answer = document.getElementById("a_answer");
const b_answer = document.getElementById("b_answer");
const c_answer = document.getElementById("c_answer");
const d_answer = document.getElementById("d_answer");
const HTMLquestion = document.getElementById("question");

function startQuiz() {
  //clear quiz data f() here//

  fetchQuestions().then((arr) => {
    const randomQuestion = arr[Math.floor(Math.random() * arr.length)];
    HTMLquestion.innerText = randomQuestion.question;
    console.log(randomQuestion.question);

    a_answer.innerText = randomQuestion.A;
    b_answer.innerText = randomQuestion.B;
    c_answer.innerText = randomQuestion.C;
    d_answer.innerText = randomQuestion.D;
  });

  startQuizBtn.addEventListener("click", () => {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("questions-screen").style.display = "block";

    // question.innerHTML =
  });
}

startQuiz();

/*
press start begins quiz
clear previous quiz data
begin iterating over each question/answers to populate quiz wrapper
if answer is correct, add one point and populate next question/answers
if answer is incorrect, do not add one point, populate next question/answers
get to end of quiz, show score
clear data
restart


stretch > score counter
*/
