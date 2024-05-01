// let newYear = new Date();
// let date = new Date();
// let mSecondsFrom1970 = date.getTime();
// let userInput = prompt;

// newYear.setDate(1);
// newYear.setMonth(0);
// newYear.setFullYear(2025);
// newYear.setHours(12);
// newYear.setMinutes(0);
// newYear.setSeconds(0);

// console.log(newYear);

// console.log(newYear.getTime());

// let diffrence = newYear.getTime() - mSecondsFrom1970;

// alert(Math.floor(diffrence / 1000 / 60 / 60 / 24) + " left for New Year");

let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let updatedTime = setInterval(function () {
  let taareekh = new Date();
  hour.innerText = taareekh.getHours() + ":";
  min.innerText = taareekh.getMinutes() + ":";
  sec.innerText = taareekh.getSeconds();
}, 1000);
