const display = document.getElementById("display");
const startStopButton = document.getElementById("startStop");
const resetButton = document.getElementById("reset");

let timerInterval;
let startTime = 0;
let pausedTime = 0;
let isRunning = false;

function startStopTimer() {
  if (isRunning) {
    clearInterval(timerInterval);
    pausedTime = Date.now() - startTime;
    startStopButton.textContent = "開始";
  } else {
    startTime = Date.now() - pausedTime;
    timerInterval = setInterval(updateTimer, 1000);
    startStopButton.textContent = "停止";
  }
  isRunning = !isRunning;
}

function updateTimer() {
  const currentTime = new Date(Date.now() - startTime);
  const hours = currentTime.getUTCHours().toString().padStart(2, "0");
  const minutes = currentTime.getUTCMinutes().toString().padStart(2, "0");
  const seconds = currentTime.getUTCSeconds().toString().padStart(2, "0");
  display.textContent = `${hours}:${minutes}:${seconds}`;
}

function resetTimer() {
  clearInterval(timerInterval);
  display.textContent = "00:00:00";
  startTime = 0;
  pausedTime = 0;
  startStopButton.textContent = "開始";
  isRunning = false;
}

startStopButton.addEventListener("click", startStopTimer);
resetButton.addEventListener("click", resetTimer);
