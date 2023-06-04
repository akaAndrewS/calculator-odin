let userNum1 = ''; 
let userNum2 = '';
let operator = '';
let result = '';
let error = false;

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
            //IF there is an error
            if(error) {
                clearDisplay();
                result = '';
                error = false;
            }
            //IF there is not currently an operator stored
            if (operator === '') {
                //add button's value to 'displayValue' and display
                displayValue += button.textContent;
                displayOutput();
                //save the number to userNum1
                userNum1 += button.textContent;
                console.log(`userNum1 is ${userNum1}`);  //FIXME ----------------------------

            }
            //IF there is an operator stored but no userNum2
            else if (userNum2 ==='') {
                //remove the display value
                displayValue = '';
                //add button's value to 'displayValue' and display
                displayValue += button.textContent;
                displayOutput();
                //save the number to userNum2
                userNum2 += button.textContent;
                console.log(`userNum2 is ${userNum2}`);  //FIXME ------------------------------
            }
            else {
                //add button's value to 'displayValue' and display
                displayValue += button.textContent;
                displayOutput();
                //save the number to userNum2
                userNum2 += button.textContent;
                console.log(`userNum2 is ${userNum2}`);  //FIXME ------------------------------
            }
            break;
        case '+':
        case '-':
            //special case for negative numbers need
        case '*':
        case '/':
            //IF there is a number stored in userNum1
            if (!(userNum1 === '')) {
                //IF there is also a number stored in userNum2
                if (!(userNum2 === '')) {
                    //get the result and display the result
                    result = operate(+userNum1, +userNum2, operator);
                    //IF operate returns ERR
                    if (result === 'ERR') {
                        clearDisplay();
                        displayValue = result;
                        displayOutput();
                        error = true;
                        return;
                    }
                    displayValue = Math.round((result + Number.EPSILON) * 1000000000) / 1000000000;
                    displayOutput();
                    //set userNum1 to the result and clear userNum2 and result
                    userNum1 = `${result}`;
                    userNum2 = '';
                    result = '';
                    //save the new operator
                    operator = button.textContent;
                    console.log(`userNum1 is ${userNum1}, operator is ${operator}`);  //FIXME ------------------------------
                }
                //ELSE just save the operator
                else {
                    operator = button.textContent;
                    console.log(operator); //FIXME ==================------------
                }
            }
            
            break;
        case '=':
            //IF there is a number stored in userNum2
            if(!(userNum2 === '')) {
                //get and display the result
                result = operate(+userNum1, +userNum2, operator);
                //IF operate returns ERR
                if (result === 'ERR') {
                    clearDisplay();
                    displayValue = result;
                    displayOutput();
                    error = true;
                    return;
                }
                displayValue = Math.round((result + Number.EPSILON) * 1000000000) / 1000000000;
                displayOutput();
                //set userNum1 to the result and clear userNum2 and result
                userNum1 = `${result}`;
                userNum2 = '';
                result = '';
                console.log(`userNum1 is ${userNum1}`);  //FIXME ------------------------------
            }
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