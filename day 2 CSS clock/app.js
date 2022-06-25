const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const second = now.getSeconds();
  const secondsDegrees = (second / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const min = now.getMinutes();
  const minDegrees = (min / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;

  const hour = now.getHours();
  const hourDegree = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);
