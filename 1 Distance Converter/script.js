/*
    ALGORITHM: Distance Converter

    1.  DEFINE THE FUNCTION:
        - Create a function named `convertDistance`.
        - It should accept three parameters: `value` (the number to convert), `fromUnit` (a string like 'km'), and `toUnit` (a string like 'm').

    2.  CONVERSION LOGIC (inside the function):
        - Create a variable to store the value in a base unit (e.g., meters). Initialize it to 0.
        - Use an `if/else if` or a `switch` statement to check the `fromUnit`:
            - If it's 'km', multiply the `value` by 1000 to get meters and store it in your base unit variable.
            - If it's 'cm', divide the `value` by 100 to get meters and store it.
            - If it's 'm', the value is already in meters, so just store it.
        - Create a final result variable.
        - Use another `if/else if` or `switch` statement to check the `toUnit`:
            - If it's 'km', divide the base unit value by 1000.
            - If it's 'cm', multiply the base unit value by 100.
            - If it's 'm', the result is simply the base unit value.
        - Return the final calculated result from the function.

    3.  TESTING THE FUNCTION:
        - To see if your function works, call it with different values and log the output.
        - You can write these test calls at the bottom of your script file.
        - To see the output, open the `index.html` file in a browser and check the developer console.
        - Example tests:
            console.log("10 km to m is:", convertDistance(10, 'km', 'm'));   // Expected output: 10000
            console.log("500 cm to m is:", convertDistance(500, 'cm', 'm')); // Expected output: 5
            console.log("2500 m to km is:", convertDistance(2500, 'm', 'km')); // Expected output: 2.5
*/

function convertDistance(value, fromUnit, toUnit){
    let x = value;
    let result = 0;
    if (fromUnit == 'km'){
        result = x*1000;
    } else{
        if (fromUnit == 'cm'){
            result = x/100;
        } else{
            result = x;
        }
    }

    let finalResult = 0;
    if (toUnit == 'km'){
        finalResult = result*1000;
    } else{
        if (fromUnit == 'cm'){
            finalResult = result/100;
        } else{
            finalResult = result;
        }
    }
    console.log('Result : ' + finalResult);
    return finalResult;
}

