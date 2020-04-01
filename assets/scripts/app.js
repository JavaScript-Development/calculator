const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// This is a comment!
/*
    This is also a comment!

    With multiple lines

*/

//  Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdenfifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdenfifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };

  logEntries.push(logEntry);
  console.log(logEntry.operation);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  //alert(currentResult++); // by adding it in fornt the ooperation returns the edited value. after the variable returns the value of the variable before it was changed).
  currentResult += enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  writeToLog("ADD", initialResult, enteredNumber, currentResult);
  console.log(logEntries);

  /*return result;*/
  /* this function now returns the values that its stored in result as the result of the function when is called */
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
  writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
  writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
  writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

// let errorMessage = "An error \n" + "ocurred!";

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
