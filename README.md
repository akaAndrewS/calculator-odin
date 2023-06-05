This project is to exercise my understanding of core Javascript concepts such as syntax, functions, loops, and objects.
This project is also to exercise my understaing of DOM mainpulation.
This project also continues my practice of the CLI as well as Git and GitHub basics, CSS styling and HTML.

index.html contains a container div that contains a display div and five row div, each with multiple buttons.
It also links to styles.css and cals.js.

styles.css sets the body's display to flex and centers the container div in the center of the screen.
It also contains the style for the various buttons, arranging them evenly with themselves and the display.
Also containted is the background-colors for the buttons to allow the number buttons to stand out.

calc.js contains multiple functions:
- buttonPress() function that determines which button was pressed and reacts accordingly
- clearDisplay() function that resets userNum1, userNum2, operator, displayValue, currentlyDisplaying and noDecimal
- displayInput() funciton that displays the current user input
- add() function takes two numbers and returns there sum
- subtract() function takes two numbers and returns their difference
- multiply() function takes two numbers and retursns their product
- divide() function takes two numbers and returns their quotient
- operate() function that takes two numbers and an operator and calls appropriate function
- keyboardButtonPress() functon takes a keyboard press then creates and passes a custom button to buttonPress() if applicable

It also sets variables for the math functions, for tracking various states and for the display node and button nodes.
It also sets EventListeners for the buttons as well as the keyboard.

THIS PROJECT WAS MADE FOR EDUCATIONAL PURPOSES.