/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add (number1, number2) {
    return number1 + number2
}


// Function Definition - Add Numbers
function add(number1, number2) {
    return number1 + number2;
}

// Function to perform addition and update the 'sum' input field
function addNumbers() {
    // Retrieve the current values of add1 and add2
    const addNumber1 = Number(document.querySelector('#add1').value);
    const addNumber2 = Number(document.querySelector('#add2').value);

    // Calculate the sum and update the 'sum' input field
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

// Event listener for the button click
document.querySelector('#addNumbers').addEventListener('click', addNumbers);




/* Function Expression - Subtract Numbers */

function subtract(subtract1, subtract2) {
    return subtract1 - subtract2;
}

function difference() {
    
    const subNumber1 = Number(document.querySelector('#subtract1').value);
    const subNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subNumber1, subNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', difference);



/* Arrow Function - Multiply Numbers */

// Function Definition - Multiply Numbers
const multiply = (factor1, factor2) => factor1 * factor2;


const performMultiplication = () => {
    const factor1 = Number(document.querySelector('#factor1').value);
    const factor2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(factor1, factor2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', performMultiplication);



/* Open Function Use - Divide Numbers */

const divide = (dividend, divisor) => dividend / divisor;

function divideNumbers() {
    const dividendNumber = Number(document.querySelector('#dividend').value);
    const divisorNumber = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(dividendNumber, divisorNumber);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.querySelector('#year').innerHTML = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */



/* Output Sum of Org. Array */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

document.querySelector('#array').innerHTML = numbersArray.join(',');




/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 !== 0);


/* Output Evens Only Array */

document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);



// Calculate the sum of the array
const sumOfArray = numbersArray.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);


document.querySelector('#sumOfArray').innerHTML = sumOfArray;


/* Output Multiplied by 2 Array */
const multipliedArray = numbersArray.map(number => number * 2);


document.querySelector('#multiplied').innerHTML = multipliedArray.join(', ');


// Multiply each element by 2
const multipliedArrayX2 = numbersArray.map(number => number * 2);

const sumOfMultiplied = multipliedArray.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);

document.querySelector('#sumOfMultiplied').innerHTML = sumOfMultiplied;


