let screen; // Screen object.
let num = "0"; // Display number
let initnum = 1; // 1 = Start a new number; 0 = Keep typing to complete a number.
let decimal = 0; // Decimal point status: 1 = The decimal point is written; 0 = There isn´t decimal point.
let hidden = 0; // Hidden number
let operation = "no"; // Operation in progress


// Function that restarts the calculator when the page is reloaded.
function init() {
    screen = document.getElementById("display");
}

// Direct input from keyboard
// With the "onkeyup" event we have access to the "keyCode" property, which will give us the code of the pressed key.
// On the next page we can see what code is assigned to each key and thus we can filter which keys we want to be pressed.
// https://keycode.info/
function input(value) {
    let keyboard = value || window.event;
    k = keyboard.keyCode;

    // Keyboard number keys
    if ( k > 47 && k < 58) { 
        p = k - 48; 
        p = String(p);
        key(p); 
    }	
    
    // Numeric keypad keys
    if (k > 95 && k < 106) {
        p = k - 96;
        p = String(p);
        key(p);
    }

    // Other keys
    if (k == 8) {del()} // Delete one by one. Key: Backspace
    if (k == 46) {clearAll()} // Erase everything. Key: Supr
    if (k == 110 || k==190) {key(".")} // Decimal point
    if (k == 107) {op('+')} // Sum
    if (k == 109) {op('-')} // Subtract
    if (k == 106) {op('*')} // Product
    if (k == 111) {op('/')} // Division
    if (k == 13) {solve()} // Equal. Fix operation. Key: Intro
}

// Show pressed numbers on screen.
function key(value) {
    // We initialize the number at 0
    if ( num == "0" || initnum == 1 ) { 
        num = value;
        screen.innerHTML = value; // Show the numbers entered

        // When entering a decimal point, there must be a zero in front of the decimal point.
        if (value == ".") {
            screen.innerHTML = "0."; 
            num = value; 
            decimal = 1; 
        }

    } else { 
        // When you type a decimal point after a number, type the decimal point and continue typing.
        if (value == "." && decimal == 0) {
            screen.innerHTML += value;
            num += value;
            decimal = 1; // Being the decimal point changes the state.
        }
        // If you try to write another decimal point in a row, nothing happens.
        else if (value == "." && decimal == 1) {
        } 

        // If none of the above happens, write numbers from 0 to 9.
        else {
                screen.innerHTML += value;
                num += value;
            }
    }
    initnum = 0; // The number is started and we can expand it.
}

// First, pending operations are resolved. The first number is on hold, we put the operation, we put the second number and we show the solution.
function op(value) {
    solve();
    hidden = num;
    operation = value;
    initnum = 1;
}	

function solve() {
    // If there isn´t pending operation, it shows the entered number.
    if (operation == "no") {
        screen.innerHTML = num;	
    // If there are pending operations
    } else {
        // We solve the operation. Where "hidden" is the first number entered, "operation" is the symbol of the operation, and "num" is the second number entered.
        result = eval(hidden + operation + num);
        screen.innerHTML = result; // We show the solution.
        num = result; // We save the solution in case we want to continue working with it.
        operation = "no";
        initnum = 1;
    }
}

// Solve square root.
function root() {
    num = Math.sqrt(num);
    screen.innerHTML = num;
    operation = "no";
    initnum = 1;
}

// Euler number.
function euler() {
    num = Math.E * num;
    screen.innerHTML = num;
    operation = "no";
    initnum = 1;
}

// We convert the entered data to a number and change the sign.
function oppos() { 
    number = Number(num);
    number = -number;
    num = String(number); // We convert it back to a string to display it.
    screen.innerHTML = num;
}

// Calculate the logarithm to base 10 of a number.
function logar(){
    num =  Math.log10(num);
    screen.innerHTML = num;
    operation = "no";
    initnum = 1;
}

// We convert the data to a number to be able to invert it, we pass it to a string and display it. 
function invert() {
    number = Number(num);
    number = (1 / number);
    num = String(number);		 
    screen.innerHTML = num;
    initnum = 1; 
}

// Calculate the square of a number.
function squar(){
    num =  num ** 2;
    screen.innerHTML = num;
    operation = "no";
    initnum = 1;
}

// Divide a number by 100.
function percent() { 
    num = num / 100;
    screen.innerHTML = num;
    solve();
    initnum = 1;
}

// Clear the entire screen.
function clearAll() {
    // We reinitialize all the variables.
    screen.innerHTML = 0;
    num = "0";
    decimal = 0; 
    hidden = 0;
    operation = "no";
}

// Delete the last data entered.
function del(){
    digit = num.length; // Identify the number of digits that are written.
    erase = num.substr( digit -1, digit ); // Indicate which is the last one.
    num = num.substr(0, digit -1); // And eliminate.

    // If nothing is written "num" is 0.
    if (num == "") { 
        num = "0";
    }

    // If a comma is deleted, we reset the variable "decimal" so that it can be rewritten.
    if (erase == ".") {
        decimal = 0;
    }

    // Show the result.
    screen.innerHTML = num;
}