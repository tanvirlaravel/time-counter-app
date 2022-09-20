// Selectors
const showTime = document.querySelector("#showTime");
const startCounter = document.querySelector("#start-counter");
const pauseCounter = document.querySelector("#pause-counter");
const stopCounter = document.querySelector("#stop-counter");
const allClear = document.querySelector("#all-clear");

// Global Data
let seconds = 58;
let minutes = 0;
let hours = 0;
let totalSecond = 123;
let myInterval = null;

