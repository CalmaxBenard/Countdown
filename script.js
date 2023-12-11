const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const form = document.getElementById("form");

let minutesInput;
let secondsInput;

const setCountdown = () => {
  const now = new Date().getTime();
  const countdownTime =
    now + (minutesInput * 60 + secondsInput) * 1000;

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countdownTime - now;

    const minutes = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    minutesEl.textContent = minutes < 10 ? "0" + minutes : minutes;
    secondsEl.textContent = seconds < 10 ? "0" + seconds : seconds;

    if (distance < 0) {
      clearInterval(interval);
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      alert("Countdown finished!");
    }
  };

  updateCountdown();
  const interval = setInterval(updateCountdown, 1000);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  minutesInput = parseInt(
    document.getElementById("minutes-input").value
  );
  secondsInput = parseInt(
    document.getElementById("seconds-input").value
  );

  if (minutesInput < 0 || secondsInput < 0) {
    alert("Please enter a positive number for minutes and seconds");
    return;
  }

  setCountdown();
});