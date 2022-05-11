const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', onColor);
stopBtn.addEventListener('click', offColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onColor() {
  timerId = setInterval(() => {
    body.style.background = getRandomHexColor();
  }, 1000);
  startBtn.setAttribute('disabled', true);
  stopBtn.removeAttribute('disabled');
}
function offColor() {
  clearInterval(timerId);
  stopBtn.setAttribute('disabled', true);
  startBtn.removeAttribute('disabled');
}
