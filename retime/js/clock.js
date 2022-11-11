const clock = document.querySelector("h2#clock");
const goalClock = document.querySelector("h2#goal");
const timeForm = document.querySelector("#time-form");
const timeInput = document.querySelector("#time-form input");
const millisecond = document.querySelector("#millisecond")

const HIDDEN_CLASSNAME = "hidden";

function onTimeSubmit(event) {
  event.preventDefault();
  timeForm.classList.add(HIDDEN_CLASSNAME);

  // current time
  const date = new Date();
  const hours = Number(String(date.getHours()).padStart(2, "0"));
  const minutes = Number(String(date.getMinutes()).padStart(2, "0"));
  const seconds = Number(String(date.getSeconds()).padStart(2, "0"));
  // clock.innerText = `${hours}:${minutes}:${seconds}`;
  
  // input time
  const submitTime = timeInput.value;
  const submitHour = Number(submitTime.split(':')[0]);
  const submitMinute = Number(submitTime.split(':')[1]);
  // goalClock.innerText = `${submitHour}:${submitMinute}:00`;
  
  // total seconds
  let totalSeconds = 0
  if (hours > submitHour) {
    totalSeconds = (((submitHour+24) * 60 + submitMinute) * 60) - ((hours * 60 + minutes) * 60 + seconds)
  } else {
    totalSeconds = ((submitHour * 60 + submitMinute) * 60) - ((hours * 60 + minutes) * 60 + seconds)
  }

  let totalMilliseconds = 1000 * totalSeconds
  
  // setInterval

}


timeForm.addEventListener("submit", onTimeSubmit);
