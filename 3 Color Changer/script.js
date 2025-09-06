/*
    ALGORITHM: Random Color Changer

    1.  SETUP:
        - Get the btn element from the HTML.
        - Get the `body` element of the page.

    2.  EVENT LISTENER:
        - Add a 'click' event listener to the button.

    3.  COLOR CHANGE LOGIC (inside the btn's click event handler):
        - Generate a random number. A good range is from 0 to 16777215.
        - Convert that random number into a hexadecimal string.
        - Prepend a '#' to the start of the hex string to create a valid CSS color code (e.g., '#1a2b3c').
        - Set the `backgroundColor` style of the `body` element to this new random color string.
*/


let button = document.getElementById("colorBtn");
let body = document.body;
let colorCode = document.getElementById("colorCode");

button.addEventListener("click", function() {
    let randomNumber = Math.floor(Math.random() * 16777215);
    let randomColor = "#" + randomNumber.toString(16).padStart(6, "0");
    
    body.style.backgroundColor = randomColor;
    colorCode.textContent = "Background: " + randomColor;
});
