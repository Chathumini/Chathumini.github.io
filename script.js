const targetDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days from now

function updateCountdown() {
  const now = new Date();
  const duration = targetDate - now;

  const days = Math.floor(duration / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((duration % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  if (duration < 0) {
    clearInterval(interval);
    document.getElementById("timer").textContent = "Countdown has ended!";
  }
}

updateCountdown();
const interval = setInterval(updateCountdown, 1000);
