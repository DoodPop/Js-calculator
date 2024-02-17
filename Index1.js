let x1 = document.querySelector('#x1');
let x2 = document.querySelector('#x2');
let x3 = document.querySelector('#x3');
let x4 = document.querySelector('#x4');
let x5 = document.querySelector('#x5');
let x6 = document.querySelector('#x6');
let x7 = document.querySelector('#x7');
let x8 = document.querySelector('#x8');
let x9 = document.querySelector('#x9');
let x0 = document.querySelector('#x0');
 let numbers = [x1,x2,x3,x4,x5,x6,x7,x8,x9,x0];
 let addBtn = document.querySelector('#add');
let subtractBtn = document.querySelector('#subtract');
let multiplyBtn = document.querySelector('#multiply');
let divideBtn = document.querySelector('#divide');
 let resultDisplay = document.getElementById('result');
 let currentInput = '';
 numbers.forEach((button) => {
    button.addEventListener('click', () => {
      currentInput += button.textContent; 
      resultDisplay.textContent = currentInput; 
    });
  });
  addBtn.addEventListener('click', () => handleOperator('+'));
  subtractBtn.addEventListener('click', () => handleOperator('-'));
  multiplyBtn.addEventListener('click', () => handleOperator('*'));
  divideBtn.addEventListener('click', () => handleOperator('/'));

  function handleOperator(operator) {
    if (currentInput !== '') {
      currentInput += ' ' + operator + ' ';
      resultDisplay.textContent = currentInput;
    }
  }

  let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
  currentInput = '';
  resultDisplay.textContent = '0';
});
let equalButton = document.getElementById('calculate');
equalButton.addEventListener('click', () => {
  try {
    currentInput = eval(currentInput);
    resultDisplay.textContent = currentInput;
  } catch (error) {
    resultDisplay.textContent = 'Error';
  }
});

