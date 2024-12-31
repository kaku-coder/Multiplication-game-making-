let score = document.querySelector(".score p");
let question = document.querySelector(".question");
let inputval = document.querySelector(".inputans");
let btnel = document.querySelector(".btn");
let count = 0;

let firstquestion = Math.floor(Math.random() * 10);
let secandquestion = Math.floor(Math.random() * 10);

question.textContent = `What is the value of ${firstquestion} * ${secandquestion}?`;

btnel.addEventListener("click", () => {
  let useranswer = parseInt(inputval.value);
  let correctanswer = firstquestion * secandquestion;

  if (useranswer === correctanswer) {
    count++;
    score.textContent = "Score: " + count;
  } else {
    alert("Wrong answer! Try again.");
  }

  inputval.value = '';

  firstquestion = Math.floor(Math.random() * 10);
  secandquestion = Math.floor(Math.random() * 10);
  question.textContent = `What is the value of ${firstquestion} * ${secandquestion}?`;
});




//i don't know what was the wrong in my code but with the help of cursor ai editer it runnig can some one tell me what was the wroung in my code