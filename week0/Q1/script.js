function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const meridian = hours >= 12 ? 'PM' : 'AM';

    const timeString = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)} ${meridian}`;
    const dateString = now.toDateString();
    const greeting = getGreeting(hours);

    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
    document.getElementById('greeting').textContent = greeting;

    setTimeout(updateClock, 1000); // Update every second
}

function formatTime(value) {
    return value < 10 ? `0${value}` : value;
}

function getGreeting(hours) {
    if (hours >= 5 && hours < 12) {
        return 'Good Morning!';
    } else if (hours >= 12 && hours < 17) {
        return 'Good Afternoon!';
    } else {
        return 'Good Evening!';
    }
}

updateClock();
