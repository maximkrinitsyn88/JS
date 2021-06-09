// TASK 1

document.addEventListener('DOMContentLoaded', function() {
  let inputSeconds = document.querySelector('.input-seconds');
  let startTimer = document.querySelector('.start-timer');
  let timer = document.querySelector('.timer');
  let interval;

  startTimer.addEventListener('click', function() {
    timer.innerHTML = inputSeconds.value;
    clearInterval(interval);
    interval = setInterval(function() {
      timer.innerHTML--;
      if (timer.innerHTML == 0) {
        clearInterval(interval);
      }
    }, 1000)
  });

// TASK 2

let inputHeadline = document.createElement('input');
document.body.append(inputHeadline);
let headline = document.createElement('h2');
document.body.append(headline);
headline.innerHTML = '';
let timeout;

inputHeadline.addEventListener('input', delayHeadline);

function delayHeadline() {
  clearTimeout(timeout);
  timeout = setTimeout(function() {
    headline.innerHTML = inputHeadline.value;
    }, 300);
  };
});




