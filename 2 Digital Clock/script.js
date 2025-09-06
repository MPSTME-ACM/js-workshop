/*
    ALGORITHM: Digital Clock

    1.  SETUP:
        - Get the HTML element that will display the time.

    2.  CREATE A TIME-UPDATING FUNCTION:
        - Inside this function, do the following:
        - Create a new `Date` object to get the current date and time.
        - Extract the current hours, minutes, and seconds from the Date object.
        - Format each part: if the number is less than 10, add a leading '0' to it.
        - Combine the formatted hours, minutes, and seconds into a string (e.g., "09:30:05").
        - Set the text content of the display element to this new time string.

    3.  EXECUTION:
        - Call the time-updating function once immediately to show the time on page load.
        - Use `setInterval` to automatically call the time-updating function every 1000 milliseconds (1 second).
*/

function CurrentTime(){
    let currentTime = new Date();
    let displayString = ''; 

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    if (hours < 10){
        hours = '0' + hours;
    }
    if (minutes < 10){
        minutes = '0' + minutes;
    }
    if (seconds < 10){
        seconds = '0' + seconds;
    }

    displayString = hours + ':' + minutes + ':' + seconds;

    console.log(displayString);
    document.getElementById('clock').innerText = displayString;
    return currentTime
}

setInterval(CurrentTime, 1000);

