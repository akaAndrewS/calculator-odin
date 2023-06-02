let userNum1 = ''; 
let userNum2 = '';
let operator = '';
let result = '';

let display = document.querySelector('.display');
let displayValue = display.textContent;
let buttons = document.querySelectorAll('button');
buttons.forEach( (button) => {
    button.addEventListener('click', () => buttonPress(button));
});

// buttonPress() function that determines which button was pressed and reacts accordingly
function buttonPress(button) {
    switch(button.textContent) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            if(!(result === '')) {
                clearDisplay();
                result = '';
            }
            displayValue += button.textContent;
            displayOutput();
            if (operator === '') {
                userNum1 += button.textContent;
                console.log(userNum1);

            }
            else {
                userNum2 += button.textContent;
                console.log(userNum2);
            }
            console.log("Getting there");
            break;
        case '+':
        case '-':
            //special case for negative numbers need
        case '*':
        case '/':
            //IF there is not an operator and a number is before the operator
            if (operator === '' && !(userNum1 === '')) {
                console.log('GEtting closer');
                //store the number before the operator in userNum1
                displayValue += ` ${button.textContent} `;
                operator = button.textContent;
                displayOutput();
            }
            break;
        case '=':
            //needs to store the number after the operator in userNum2
            if(!(userNum2 === '')) {
                console.log('so close!');
                userNum1 = +userNum1;
                userNum2 = +userNum2;
                result = operate(userNum1, userNum2, operator);
                clearDisplay();
                displayValue = result;
                displayOutput();
            }
            //needs to ensure that a nuber is after the operator
            break;
        case 'Clear':
            clearDisplay();
            break;

        
    }
}

// clearDisplay() function that resets userNum1, userNum2, operator and displayValue
function clearDisplay() {
    userNum1 = '';
    userNum2 = '';
    operator = '';
    displayValue = '';
    displayOutput();
}

// displayInput() funciton that displays the current user input
function displayOutput() {
    display.textContent = displayValue;
}

// add() function takes two numbers and returns there sum
function add (num1, num2) {
    return num1 + num2;
}
// subtract() function takes two numbers and returns their difference
function subtract (num1, num2) {
    return num1 - num2;
}
// multiply() function takes two numbers and retursns their product
function multiply (num1, num2) {
    return num1 * num2;
}
// divide() function takes two numbers and returns their quotient
function divide (num1, num2) {
    //IF trying to divide by zero
    if (num2 ===0) {
        //return error
        return "ERR";
    }
    return num1 / num2;
}

// operate() function that takes two numbers and an operator and calls appropriate function
function operate (num1, num2, operator1) {
    switch(operator1) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

/*
// TEST CALLS //FIXME --------------------
// test add(), subtract(), multiply(), divide() functions
for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
        if (!(add(i, j) === i + j)) {
            console.log(`sum of ${i} and ${j} is false`);
        }
        if (!(subtract(i, j) === i - j)) {
            console.log(`subtract of ${i} and ${j} is false`);
        }
        if (!(multiply(i, j) === i * j)) {
            console.log(`multiply of ${i} and ${j} is false`);
        }
        if (!(divide(i, j) === i / j) && !(divide(i, j) === "ERR")) {
            console.log(`divide of ${i} and ${j} is false`);
        }
    }
}
// test operate function calling add(), subtract(), multiply(), divide() functions
for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
        if (!(operate(i, j, '+') === i + j)) {
            console.log(`sum of ${i} and ${j} is false`);
        }
        if (!(operate(i, j, '-') === i - j)) {
            console.log(`subtract of ${i} and ${j} is false`);
        }
        if (!(operate(i, j, '*') === i * j)) {
            console.log(`multiply of ${i} and ${j} is false`);
        }
        if (!(operate(i, j, '/') === i / j) && !(operate(i, j, '/') === "ERR")) {
            console.log(`divide of ${i} and ${j} is false`);
        }
    }
}
console.log("Done");*/
