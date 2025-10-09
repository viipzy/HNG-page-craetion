// Function to update the current UTC time and day of the week
function updateDateTime() {
    const currentDate = new Date();

    // Update day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const daysIndex = currentDate.getDay();
    const currentDayOfTheWeek = daysOfWeek[daysIndex];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDayOfTheWeek;


    // Update UTC time
    const currentUTCTime = currentDate.getTime();
    document.querySelector('[data-testid="currentUTCTime"]').textContent = currentUTCTime;
}


// Set interval to update the time and day of the week every second
setInterval(updateDateTime, 1000);