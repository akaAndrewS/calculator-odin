let userNum1 = ''; 
let userNum2 = '';
let operator = '';
let result = '';
let error = false;
let noDecimal = true;

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
                //IF there is a result stored, then the equal sign was pressed so the userNum1 should be cleared
                if(!(result === '')) {
                    userNum1 = '';
                    result = '';
                }
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
        case '*':
        case '/':
            //IF there is an error
            if(error) {
                clearDisplay();
                result = '';
                error = false;
            }
            //IF there is a number stored in userNum1
            if (!(userNum1 === '')) {
                //reset decimal tracker
                noDecimal = true;
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
            //IF there is an error
            if(error) {
                clearDisplay();
                result = '';
                error = false;
            }
            //IF there is a number stored in userNum2
            if(!(userNum2 === '')) {
                //reset decimal tracker
                noDecimal = true;
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
                displayValue = '';
                //set userNum1 to the result and clear userNum2 and operator (but not result)
                userNum1 = `${result}`;
                userNum2 = '';
                operator = '';
                console.log(`userNum1 is now ${userNum1}`);  //FIXME ------------------------------
            }
            break;
        case 'C':
            clearDisplay();
            break;
        case ".":
            //IF there is an error
            if(error) {
                clearDisplay();
                result = '';
                error = false;
            }
            if(noDecimal) {
                //IF (there is no userNum1) 
                if(userNum1 === '') {
                    //add a 0 and . to userNum1, change noDecimal to false and display
                    noDecimal = false;
                    userNum1 = '0.';
                    displayValue = '0.'
                    displayOutput();
                }
                //else if (there is a userNum1 && no operator) 
                else if (!(userNum1 === '') && (operator === '')) {
                    //IF there is a result stored, then the equal sign was pressed so the userNum1 should be cleared
                    if (!(result === '')) {
                        result = '';
                        userNum1 = '0.';
                        noDecimal = false;
                        displayValue = userNum1;
                        displayOutput();
                    }
                    //ELSE add a decimal to userNum1 and display
                    else {
                        //add a decimal to userNum1, change noDecimal to false and display
                        userNum1 += '.';
                        displayValue += '.';
                        noDecimal = false;
                        displayOutput();
                    }
                }
                //else if (there is a userNum1 && there is an operator && there is no userNum2)
                else if(!(userNum1 === '') && !(operator === '') && (userNum2 === '')) {
                    //add a 0 and . to userNum2, change noDecimal to false and display
                    userNum2 = '0.';
                    displayValue = '0.';
                    noDecimal = false;
                    displayOutput();
                }
                else {
                    //add a decimal to userNum2, change noDecimal to false and display
                    userNum2 += '.';
                    displayValue += '.';
                    noDecimal = false;
                    displayOutput();
                }
            }
            break;
        case "Bck":
            //IF there is an error
            if(error) {
                clearDisplay();
                result = '';
                error = false;
            }
            break;
        case "+/-":
            //IF there is an error
            if(error) {
                clearDisplay();
                result = '';
                error = false;
            }
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

window.addEventListener('keydown', keyboardButtonPress);

function keyboardButtonPress(e) {
    console.log(e);   //FIXME -------------------------------------------------------------------------------
    let customButton;
    switch(e.key) { 
        case '1':
            customButton = {textContent : '1'};
            buttonPress(customButton);
            break;
        case '2':
            customButton = {textContent : '2'};
            buttonPress(customButton);
            break;
        case '3':
            customButton = {textContent : '3'};
            buttonPress(customButton);
            break;
        case '4':
            customButton = {textContent : '4'};
            buttonPress(customButton);
            break;
        case '5':
            customButton = {textContent : '5'};
            buttonPress(customButton);
            break;
        case '6':
            customButton = {textContent : '6'};
            buttonPress(customButton);
            break;
        case '7':
            customButton = {textContent : '7'};
            buttonPress(customButton);
            break;
        case '8':
            customButton = {textContent : '8'};
            buttonPress(customButton);
            break;
        case '9':
            customButton = {textContent : '9'};
            buttonPress(customButton);
            break;
        case '0':
            customButton = {textContent : '0'};
            buttonPress(customButton);
            break;
        case '+':
            customButton = {textContent : '+'};
            buttonPress(customButton);
            break;
        case '-':
            customButton = {textContent : '-'};
            buttonPress(customButton);
            break;
        case '*':
            customButton = {textContent : '*'};
            buttonPress(customButton);
            break;
        case '/':
            customButton = {textContent : '/'};
            buttonPress(customButton);
            break;
        case 'Enter':
        case '=':
            customButton = {textContent : '='};
            buttonPress(customButton);
            break;
        case '.':
            customButton = {textContent : '.'};
            buttonPress(customButton);
            break;
        case 'Backspace':
            customButton = {textContent : 'Bck'};
            buttonPress(customButton);
            break;
        case 'C':
        case 'c':
            customButton = {textContent : 'C'};
            buttonPress(customButton);
            break;
    }
}

