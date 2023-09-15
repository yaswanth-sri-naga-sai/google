let duration = 5 * 60 * 1000; // 5 minutes in milliseconds
let startTime = Date.now() - duration; // Calculate the start time
const timerElement = document.getElementById("timer");

function updateTimer() {
    const currentTime = Date.now() - startTime;
    const remainingTime = duration - currentTime;

    if (remainingTime <= 0) {
        clearInterval(intervalId); // Stop the timer when it reaches zero
        timerElement.textContent = startTime;
    } else {
        const minutes = Math.floor(remainingTime / 60000);
        const seconds = Math.floor((remainingTime % 60000) / 1000);

        timerElement.textContent = `${pad(minutes)}:${pad(seconds)}`;
    }
}

function pad(value) {
    return String(value).padStart(2, "0");
}

const intervalId = setInterval(updateTimer, 1000); // Update the timer every
