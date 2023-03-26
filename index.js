'use strict';

const Questions = [
  {
    que: 'Which of the following is markup language ?',
    a: 'HTML',
    b: 'CSS',
    c: 'Javascript',
    d: 'PHP',
    correct: 'a',
  },
  {
    que: 'What year was javascript lanuched ?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
  {
    que: 'What does CSS stand for ?',
    a: 'Hyper text markup language',
    b: 'Cascading style sheet',
    c: 'Jason Object Notation',
    d: 'Centeral Section Style',
    correct: 'b',
  },
];
let index = 0;
let total = Questions.length;
let right = 0,
  wrong = 0;
const quesBox = document.getElementById('boxQuestion');
const optionInputs = document.querySelectorAll('.options');
const NextBtn = document.querySelector('.Nbtn');
const PrevBtn = document.querySelector('.Pbtn');
const loadQuestion = () => {
  if (index == total) {
    return endQuiz();
  }
  reset();
  const data = Questions[index];
  quesBox.innerText = `${index + 1}) ${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
  const data = Questions[index];
  const ans = getAnswer();
  if (ans == data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};
const getAnswer = () => {
  let answer;
  optionInputs.forEach(input => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};
const reset = () => {
  optionInputs.forEach(input => {
    input.checked = false;
  });
};

const endQuiz = () => {
  document.getElementById('box').innerHTML = `
  <div style="text-align:center"> 
  <h3>Thank you for playing Quiz </h3>
  <h2> ${right}/${total} are correct <h2>
  <div>`;
};
NextBtn.addEventListener('click', function () {
  index++;
  if (index < total) {
    loadQuestion();
  }
});

PrevBtn.addEventListener('click', function () {
  index--;
  if (index >= 0) {
    loadQuestion();
  }
});
loadQuestion();
