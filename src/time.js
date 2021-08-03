let now = new Date();

let days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thusday",
  "friday",
  "saturday",
];
let day = `${days[now.getDay()]}`;

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}

let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

document.querySelector(".time").innerHTML = `${day} ${hours}:${minutes}`;
