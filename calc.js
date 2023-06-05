//variable to hold the numbers and operator
let userNum1 = ''; 
let userNum2 = '';
let operator = '';
//variable to hold result
let result = '';
//variables for checks
let error = false;
let noDecimal = true;
let currentlyDisplaying = '';
//variable for what is to be shown in display
let displayValue = '';

//variable for display node
let display = document.querySelector('.display');
//variable for nodelist of buttons
let buttons = document.querySelectorAll('button');

//EventListener for each button
buttons.forEach( (button) => {
    button.addEventListener('click', () => buttonPress(button));
});
//EventListener for keyboard
window.addEventListener('keydown', keyboardButtonPress);

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
                currentlyDisplaying = 'userNum1';
                //IF userNum1 only contains a single digit and that digit is 0
                if(userNum1.length === 1 && userNum1 === '0') {
                    //set userNum1 to only the current button
                    userNum1 = button.textContent;
                }
                else {
                    //attach the number to userNum1
                    userNum1 += button.textContent;
                }                
                //display userNum1
                displayValue = userNum1;
                displayOutput();
                console.log(`userNum1 is ${userNum1}`);  //FIXME ----------------------------
            }
            //IF there is an operator stored but no userNum2
            else if (userNum2 ==='') {
                //remove the display value
                displayValue = '';
                currentlyDisplaying = 'userNum2';
                //save the number to userNum2
                userNum2 += button.textContent;
                //display userNum2
                displayValue = userNum2;
                displayOutput();
                console.log(`userNum2 is ${userNum2}`);  //FIXME ------------------------------
            }
            else {
                currentlyDisplaying = 'userNum2';
                //IF userNum2 only contains a single digit and that digit is 0
                if(userNum2.length === 1 && userNum2 === '0') {
                    //set userNum2 to only the current button
                    userNum2 = button.textContent;
                }
                else {
                    //attach the number to userNum2
                    userNum2 += button.textContent;
                } 
                //display userNum2
                displayValue = userNum2;
                displayOutput();
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
                currentlyDisplaying = '';
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
                    currentlyDisplaying = 'operator result';
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
                currentlyDisplaying = 'result';
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
                    currentlyDisplaying = 'userNum1';
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
                        currentlyDisplaying = 'userNum1';
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
                    currentlyDisplaying = 'userNum2';
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
            console.log(userNum1.length); //FIXME ----------------------------------------------------------------
            //IF the display is currently showing userNum1
            if(currentlyDisplaying === 'userNum1') {
                //IF the last character of userNum1 is a decimal
                if(userNum1[userNum1.length - 1] === '.') {
                    noDecimal = true;
                }
                //set userNum1 to itself minus its last character
                userNum1 = userNum1.substring(0, userNum1.length-1);
                //IF userNum1 still contains a value
                if(userNum1.length > 0) {
                    displayValue = userNum1;
                    displayOutput();
                }
                else {
                    displayValue = '';
                    displayOutput();
                    currentlyDisplaying = '';
                }
            }
            //ELSE IF the display is currently showing userNum2
            else if (currentlyDisplaying === 'userNum2') {
                //IF the last character of userNum2 is a decimal
                if(userNum2[userNum2.length - 1] === '.') {
                    noDecimal = true;
                }
                //set userNum2 to itself minus its last character
                userNum2 = userNum2.substring(0, userNum2.length-1);
                //IF userNum2 still contains a value
                if(userNum2.length > 0) {
                    displayValue = userNum2;
                    displayOutput();
                }
                else {
                    displayValue = '';
                    displayOutput();
                    currentlyDisplaying = '';
                }
            }
            break;
        case "+/-":
            //IF there is an error
            if(error) {
                clearDisplay();
                result = '';
                error = false;
            }
            //IF the display is currently showing userNum1
            if(currentlyDisplaying === 'userNum1') {
                //change it to either positive or negative
                userNum1 *= -1;
                //keep userNum1 a string
                userNum1 = `${userNum1}`;
                displayValue = userNum1;
                displayOutput();
            }
            //ELSE IF the display is currently showing userNum2
            else if (currentlyDisplaying === 'userNum2') {
                //change it to either positive or negative
                userNum2 *= -1;
                //keep userNum2 a string
                userNum2 = `${userNum2}`;
                displayValue = userNum2;
                displayOutput();
            }
            break;
    }
}

// clearDisplay() function that resets userNum1, userNum2, operator, displayValue, currentlyDisplaying and noDecimal
function clearDisplay() {
    userNum1 = '';
    userNum2 = '';
    operator = '';
    displayValue = '';
    currentlyDisplaying = '';
    noDecimal = true;
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

// keyboardButtonPress() functon takes a keyboard press then creates and passes a custom button to buttonPress() if applicable
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