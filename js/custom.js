const hoursEl = document.querySelector('.hours');
const minutesEl = document.querySelector('.minutes');
const secondsEl = document.querySelector('.seconds');
const millisecondsEl = document.querySelector('.milliseconds');
const labInterface = document.querySelector('.lab-interface > ul');

const stopBtn = document.querySelector('.stop');
const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');
const labBtn = document.querySelector('.lab');

let [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
let timer;
let isRunning = false;
let i = 0;

const watchStart = () => {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  hoursEl.innerHTML = (hours < 10 ? '0' : '') + hours;
  minutesEl.innerHTML = (minutes < 10 ? '0' : '') + minutes;
  secondsEl.innerHTML = (seconds < 10 ? '0' : '') + seconds;
  millisecondsEl.innerHTML = milliseconds < 10 ? '00' + milliseconds : milliseconds < 100 ? '0' + milliseconds : milliseconds;
};

stopBtn.addEventListener('click', function () {
  if (isRunning) {
    isRunning = false;
    // for Start btn active
    this.classList.remove('active');
    startBtn.classList.add('active');

    // for Lab btn active
    labBtn.classList.remove('active');
    resetBtn.classList.add('active');
  }
  clearInterval(timer);
});

startBtn.addEventListener('click', function () {
  if (!isRunning) {
    isRunning = true;
    // for Reset btn active
    this.classList.remove('active');
    stopBtn.classList.add('active');

    // for Lab btn active
    resetBtn.classList.remove('active');
    labBtn.classList.add('active');

    timer = setInterval(watchStart, 10);
  }
});

resetBtn.addEventListener('click', function () {
  i = 0;
  clearInterval(timer);
  labInterface.innerHTML = '';
  [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
  hoursEl.innerHTML = (hours < 10 ? '0' : '') + hours;
  minutesEl.innerHTML = (minutes < 10 ? '0' : '') + minutes;
  secondsEl.innerHTML = (seconds < 10 ? '0' : '') + seconds;
  millisecondsEl.innerHTML = milliseconds < 10 ? '00' + milliseconds : milliseconds < 100 ? '0' + milliseconds : milliseconds;
});

labBtn.addEventListener('click', function () {
  i++;
  const li = document.createElement('li');
  li.innerHTML =
    '<p>Lab ' +
    i +
    ' </p>' +
    '<div class="timer-section"><span>' +
    hoursEl.innerHTML +
    '</span>' +
    '<span>' +
    minutesEl.innerHTML +
    '</span>' +
    '<span>' +
    secondsEl.innerHTML +
    '</span>' +
    '<span>' +
    millisecondsEl.innerHTML +
    '</span></div>';
  labInterface.append(li);
});
