/*
    ALGORITHM: Simple Calculator

    1.  SETUP:
        - Get the display element (e.g., an <input> field).
        - Get all the number buttons.
        - Get all the operator buttons (+, -, *, /).
        - Get the equals button.
        - Get the clear button.
        - Create variables to store the first operand, the second operand, and the current operation.

    2.  EVENT LISTENERS:
        - Loop through all number buttons and add a 'click' listener to each.
        - Loop through all operator buttons and add a 'click' listener to each.
        - Add a 'click' listener to the equals button.
        - Add a 'click' listener to the clear button.

    3.  LOGIC FOR NUMBER CLICKS:
        - When a number button is clicked, append its value to the string in the display.

    4.  LOGIC FOR OPERATOR CLICKS:
        - When an operator button is clicked:
            - If there's a value in the display, store it as the 'first operand'.
            - Store the operator that was clicked.
            - Clear the display so the user can enter the second number.

    5.  LOGIC FOR EQUALS CLICK:
        - When the equals button is clicked:
            - Store the current value in the display as the 'second operand'.
            - Based on the stored operator, perform the calculation between the 'first operand' and 'second operand'.
            - Display the result in the display element.
            - Reset the stored operands and operator for the next calculation.

    6.  LOGIC FOR CLEAR CLICK:
        - When the clear button is clicked:
            - Clear the display.
            - Reset all stored variables (first operand, second operand, operator).
*/