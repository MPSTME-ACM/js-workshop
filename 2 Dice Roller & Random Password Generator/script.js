/*
    ALGORITHM: Dice Roller & Random Password Generator

    PART 1: Dice Roller
    1. SETUP:
       - Get the number input element for the number of dice.
       - Get the "Roll Dice" button element.
       - Get the text result display element and image container element.

    2. ROLL LOGIC (inside roll button click handler):
       - Read the number of dice from the input field.
       - Create two empty arrays: `values` (for numbers) and `images` (for HTML <img> strings).
       - Run a for-loop from 0 up to the number of dice:
           - Generate a random integer between 1 and 6: `Math.floor(Math.random() * 6) + 1`.
           - Push the number to `values`.
           - Push an `<img>` tag with the corresponding dice image source into `images`.
       - Display the joined numbers in the text result element.
       - Set the `.innerHTML` of the image container to the joined images array.

    PART 2: Random Password Generator
    1. SETUP:
       - Define character set strings: lowercase, uppercase, numbers, and symbols.
       - Define helper function `generatePassword(length, includeLower, includeUpper, includeNumbers, includeSymbols)`.

    2. GENERATOR LOGIC:
       - Create an empty string `allowedChars` and an empty string `password`.
       - Based on boolean flags, append matching character sets to `allowedChars`.
       - If `length <= 0`, return an error message.
       - If `allowedChars.length === 0`, return an error message stating at least one set must be chosen.
       - Loop `length` times:
           - Generate a random index between 0 and `allowedChars.length - 1`.
           - Append the character at that random index to `password`.
       - Return the generated `password`.
*/

// WRITE YOUR CODE BELOW:

// PART 1: Dice Roller

const numOfDice = document.getElementById("numOfDice");
const rollBtn = document.getElementById("rollBtn");
const diceResult = document.getElementById("diceResult");
const diceImages = document.getElementById("diceImages");

rollBtn.onclick = function() {
    const num = Number(numOfDice.value);
    const values = [];
    const images = [];

    for (let i = 0; i < num; i++) {
        const val = Math.floor(Math.random() * 6) + 1;
        values.push(val);
        // Uses dice face images or falls back cleanly
        images.push('<img src="https://assets.dryicons.com/uploads/icon/svg/771' + (val - 1) + '/dice.svg" width="50" style="margin: 5px;">');
    }

    diceResult.textContent = "Dice: " + values.join(", ");
    diceImages.innerHTML = images.join("");
}

// PART 2: Random Password Generator

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=";

function generatePassword(length, includeLower, includeUpper, includeNumbers, includeSymbols) {
    let allowedChars = "";
    let password = "";

    if (includeLower) {
        allowedChars += lowercaseChars;
    }
    if (includeUpper) {
        allowedChars += uppercaseChars;
    }
    if (includeNumbers) {
        allowedChars += numberChars;
    }
    if (includeSymbols) {
        allowedChars += symbolChars;
    }

    if (length <= 0) {
        return "Password length must be at least 1";
    }
    if (allowedChars.length === 0) {
        return "At least 1 set of characters must be selected";
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

// Hook up generator to buttons and display
const passLength = document.getElementById("passLength");
const incLower = document.getElementById("incLower");
const incUpper = document.getElementById("incUpper");
const incNumbers = document.getElementById("incNumbers");
const incSymbols = document.getElementById("incSymbols");
const genPassBtn = document.getElementById("genPassBtn");
const passResult = document.getElementById("passResult");

genPassBtn.onclick = function() {
    const length = Number(passLength.value);
    const result = generatePassword(
        length,
        incLower.checked,
        incUpper.checked,
        incNumbers.checked,
        incSymbols.checked
    );
    passResult.textContent = result;
}
