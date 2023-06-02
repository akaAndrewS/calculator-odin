let userNum1, userNum2, operator;

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
console.log("Done");
