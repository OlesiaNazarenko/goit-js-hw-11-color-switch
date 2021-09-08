const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

body = document.querySelector("body");
const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
let timeOutId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
function changeColor() {
    body.style.backgroundColor = `${colors[randomIntegerFromInterval(0, colors.length - 1)]}`;
    btnStart.setAttribute("disabled", "disabled");
    
};

function finishChangeTheme() {
    clearInterval(timeOutId);
    btnStart.removeAttribute("disabled");
};

btnStart.addEventListener('click', () => { timeOutId = setInterval(changeColor, 2000)});
btnStop.addEventListener('click', finishChangeTheme);