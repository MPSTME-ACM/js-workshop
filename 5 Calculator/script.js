
var currentOperand = '';
var previousOperand = '';
var operation = undefined;

function clear() {
  currentOperand = '';
  previousOperand = '';
  operation = undefined;

}

function del() {
  currentOperand = currentOperand.toString().slice(0, -1);
}

function appendNumber(number) {
  if (number === '.' && currentOperand.includes('.')) return;
  currentOperand += number.toString();
}

function chooseOperation(op) {
  if (currentOperand === '') return;
  if (previousOperand !== '') compute();
  operation = op;
  previousOperand = currentOperand;
  currentOperand = '';
}

function compute() {
  var prev = parseFloat(previousOperand);
  var current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case '+': currentOperand = prev + current; break;
    case '-': currentOperand = prev - current; break;
    case '*': currentOperand = prev * current; break;
    case '÷': currentOperand = prev / current; break;
    default: return;
  }
  operation = undefined;
  previousOperand = '';
}

function updateDisplay() {
  currentOperandTextElement.innerText = currentOperand;
  if (operation != null) {
    previousOperandTextElement.innerText = previousOperand + " " + operation;
  } else {
    previousOperandTextElement.innerText = '';
  }
}

// DOM connections
var numberButtons = document.querySelectorAll('[data-number]');
var operationButtons = document.querySelectorAll('[data-operation]');
var equalsButton = document.querySelector('[data-equals]');
var deleteButton = document.querySelector('[data-delete]');
var allClearButton = document.querySelector('[data-all-clear]');
var previousOperandTextElement = document.querySelector('[data-previous-operand]');
var currentOperandTextElement = document.querySelector('[data-current-operand]');

numberButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    appendNumber(button.innerText);
    updateDisplay();
  });
});

operationButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    chooseOperation(button.innerText);
    updateDisplay();
  });
});

equalsButton.addEventListener('click', function() {
  compute();
  updateDisplay();
});

allClearButton.addEventListener('click', function() {
  clear();
  updateDisplay();
});

deleteButton.addEventListener('click', function() {
  del();
  updateDisplay();
});
