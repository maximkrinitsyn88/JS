document.addEventListener('DOMContentLoaded', function() {
  let inputSeconds = document.querySelector('.input-seconds');
  let startTimer = document.querySelector('.start-timer');
  let timer = document.querySelector('.timer');

  startTimer.addEventListener('click', function() {
    timer.innerHTML = inputSeconds.value
    let interval = setInterval(function() {
      if (timer.innerHTML <= 1) {
        clearInterval(interval)
      }
      timer.innerHTML--
    }, 1000)
  });
});



