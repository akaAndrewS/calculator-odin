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
    if (num2 ===0) {
        return "ERR";
    }
    return num1 / num2;
}

// TEST CALLS //FIXME --------------------
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
        if (!(divide(i, j) === i / j)) {
            console.log(`divide of ${i} and ${j} is false`);
        }
    }
    console.log("Done");
}