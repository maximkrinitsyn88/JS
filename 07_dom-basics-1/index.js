// TASK 1

document.addEventListener('DOMContentLoaded', function() {
  let inputSeconds = document.querySelector('.input-seconds');
  let startTimer = document.querySelector('.start-timer');
  let timer = document.querySelector('.timer');

  startTimer.addEventListener('click', function() {
    timer.innerHTML = inputSeconds.value;
    let interval = setInterval(function() {
      if (timer.innerHTML <= 1) {
        clearInterval(interval);
      }
      timer.innerHTML--;
    }, 1000)
  });



// TASK 2


let inputHeadline = document.createElement('input');
document.body.append(inputHeadline);
let headline = document.createElement('h2');
document.body.append(headline);
headline.innerHTML = '';

let enterHeadline = inputHeadline.addEventListener('input', delayHeadline)

function delayHeadline() {
  let timeout = setTimeout(function() {
    headline.innerHTML = inputHeadline.value;
  }, 300);
  if (enterHeadline) {
    clearTimeout(timeout)
  }
};























});




