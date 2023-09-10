// Get the screen element
var screen = document.getElementById("screen");

// Get the button elements
var buttons = document.getElementsByClassName("button");

// Declare a variable to store the current input
var input = "";

// Declare a variable to store the current result
var result = 0;

// Declare a variable to store the current operator
var operator = "";

// Declare a variable to store the current function
var func = "";

// Declare a variable to indicate if the input is valid
var valid = true;

// Loop through the buttons and add event listeners
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    // Get the value of the clicked button
    var value = this.innerHTML;

    // Check if the value is a number or a dot
    if (isNumber(value) || value == ".") {
      // Append the value to the input
      input += value;
      // Display the input on the screen
      screen.innerHTML = input;
    }

    // Check if the value is an operator
    else if (isOperator(value)) {
      // Check if there is a previous input and operator
      if (input && operator) {
        // Calculate the result based on the previous input and operator
        result = calculate(result, parseFloat(input), operator);
        // Display the result on the screen
        screen.innerHTML = result;
      }
      // Check if there is no previous input but there is a result
      else if (!input && result) {
        // Do nothing, keep the result on the screen
      }
      // Check if there is an input but no result
      else if (input && !result) {
        // Set the result to the input
        result = parseFloat(input);
        // Display the result on the screen
        screen.innerHTML = result;
      }
      // Clear the input
      input = "";
      // Set the operator to the value
      operator = value;
    }

    // Check if the value is a function
    else if (isFunction(value)) {
      // Set the function to the value
      func = value;
      // Check if there is an input
      if (input) {
        // Calculate the result based on the input and function
        result = calculateFunction(parseFloat(input), func);
        // Display the result on the screen
        screen.innerHTML = result;
        // Clear the input
        input = "";
      }
      // Check if there is no input but there is a result
      else if (!input && result) {
        // Calculate the result based on the result and function
        result = calculateFunction(result, func);
        // Display the result on the screen
        screen.innerHTML = result;
      }
    }

    // Check if the value is equal sign
    else if (value == "=") {
      // Check if there is an input and an operator
      if (input && operator) {
        // Calculate the result based on the input and operator
        result = calculate(result, parseFloat(input), operator);
        // Display the result on the screen
        screen.innerHTML = result;
        // Clear the input and operator
        input = "";
        operator = "";
      }
    }

    // Check if the value is clear sign
    else if (value == "C") {
      // Clear everything
      input = "";
      result = 0;
      operator = "";
      func = "";
      valid = true;
      // Display zero on the screen
      screen.innerHTML = 0;
    }
  });
}

// A function to check if a value is a number
function isNumber(value) {
  return !isNaN(value);
}

// A function to check if a value is an operator
function isOperator(value) {
  return value == "+" || value == "-" || value == "*" || value == "/";
}

// A function to check if a value is a function
function isFunction(value) {
  return (
    value == "√" ||
    value == "sin" ||
    value == "cos" ||
    value == "tan" ||
    value == "log" ||
    value == "^"
  );
}

// A function to calculate the result based on two numbers and an operator
function calculate(x, y, op) {
  switch (op) {
    case "+":
      return x + y;
    case "-":
      return x - y
      case "*":
        return x * y;
      case "/":
        return x / y;
      case "^":
        return Math.pow(x, y);
      default:
        return 0;
    }
  }
  
  // A function to calculate the result based on a number and a function
  function calculateFunction(x, f) {
    switch (f) {
      case "√":
        return Math.sqrt(x);
      case "sin":
        return Math.sin(x);
      case "cos":
        return Math.cos(x);
      case "tan":
        return Math.tan(x);
      case "log":
        return Math.log(x);
      default:
        return 0;
    }
  }
  