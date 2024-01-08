// DOM elements
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const millisecondsElement = document.getElementById("milliseconds");
const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById("resetBtn");

let timer;
let running = false;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

// Function to update the stopwatch display
function updateDisplay() {
  millisecondsElement.textContent = milliseconds.toString().padStart(3, '0');
  secondsElement.textContent = seconds.toString().padStart(2, '0');
  minutesElement.textContent = minutes.toString().padStart(2, '0');
}

// Function to reset the stopwatch
function reset() {
  clearInterval(timer);
  running = false;
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  updateDisplay();
  startStopBtn.textContent = 'Start';
}

// Function to start or stop the stopwatch
function toggleStartStop() {
  if (running) {
    clearInterval(timer);
    startStopBtn.textContent = 'Start';
  } else {
    timer = setInterval(() => {
      milliseconds += 10;
      if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
      }
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
      }
      updateDisplay();
    }, 10);
    startStopBtn.textContent = 'Stop';
  }
  running = !running;
}

// Event listeners
startStopBtn.addEventListener('click', toggleStartStop);
resetBtn.addEventListener('click', reset);

// Initialize
updateDisplay();
