// Start with 10 minutes (10 minutes * 60 seconds)
let totalSeconds = 10 * 60; 

// Grab the HTML element where the time will be displayed
const timerElement = document.getElementById('timerDisplay');

function updateTimer() {
    // 1. Calculate minutes and remaining seconds
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    // 2. Format numbers so they always have two digits (e.g., "05" instead of "5")
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    // 3. Update the HTML text
    timerElement.textContent = `${formattedMinutes}:${formattedSeconds}`;

    // 4. Check if the timer hit zero
    if (totalSeconds <= 0) {
        clearInterval(countdownInterval);
        timerElement.textContent = "00:00";
        timerElement.style.color = "#ef4444"; // Change color to red when finished
        alert("Time's up!");
    } else {
        // Decrease total seconds remaining by 1
        totalSeconds--;
    }
}

// Run the updateTimer function immediately once so the page doesn't flash "10:00"
updateTimer();

// Run the updateTimer function every 1 second (1000 milliseconds)
const countdownInterval = setInterval(updateTimer, 1000);
