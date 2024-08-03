const display = document.getElementById("counter");

let isRunning = false;
let timer = null;
let startTime = 0;
let elapsedTime = 0;

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 5);
    console.log(timer);
    isRunning = true;
  }
}

function pause() {
  if (isRunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}

function reset() {
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  display.textContent = "00:00:00:00:00";
}

function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  let days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24))
    .toString()
    .padStart(2, 0);
  let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
    .toString()
    .padStart(2, 0);
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60)
    .toString()
    .padStart(2, 0);
  let seconds = Math.floor((elapsedTime / 1000) % 60)
    .toString()
    .padStart(2, 0);
  let miliseconds = Math.floor((elapsedTime % 1000) / 10)
    .toString()
    .padStart(2, 0);

  display.textContent = `${days}:${hours}:${minutes}:${seconds}:${miliseconds}`;
}
