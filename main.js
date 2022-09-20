// Selectors
const showTime = document.querySelector("#showTime");
const startCounter = document.querySelector("#start-counter");
const pauseCounter = document.querySelector("#pause-counter");
const stopCounter = document.querySelector("#stop-counter");
const allClear = document.querySelector("#all-clear");

// Global Data
let seconds = 58;
let minutes = 2;
let hours = 4;
let totalSecond = 123;
let myInterval = null;

// Run program first time
renderTime();

// Functions

function renderTime() {
  showTimes();
}

function showTimes() {
  showTime.innerText = `${hours ? hours : "00"}:${minutes ? minutes : "00"}:${
    seconds ? seconds : "00"
  }`;
}