 'use strict';

// Error 1:
// Fix: typo in console.log
let message = 'Welcome to the debugging exercise!';
console.log(message); 

// Error 2: 

// Fixed type from class to id by removing the dot and adding a hashtag
let button = document.querySelector("#actionButton"); 
button.addEventListener('click', eventHandler); 

// Error 3: 
function eventHandler() {
    console.log('Button clicked');
    displayOutput();
  }

  // Error 4: 
function displayOutput() {
    let output = document.querySelector('#output'); 
    output.innerText = 'You clicked the button!';
  }

// Error 6: 
// Fix: Declare localMessage outside of function and remove from inside the function (global scope)
// Got help from Bard for the fix
let localMessage;
function updateMessage() {
    localMessage ='Updated message';
  }
  updateMessage();
  console.log(localMessage); 
  
  // Error 7: 
//   Fix: Replace dot with comma in addEventListener on line 37
document.getElementById('testButton').addEventListener('click', testFunction);

function testFunction() {
  console.log('Test function executed');
}

// Error 8:
// Fix: Change minus to plus in console.log on line 48 for correct Sum Logic.
let number1 = 10;
let number2 = 5;
console.log('Sum is: ' + (number1 + number2));

// Error 9: 
// Fix: Change null to 'null' on line 54
let nullVar = 'null';
console.log(nullVar.length);

// Error 10:
// Fix: Change CaseSensitiveVar to caseSensitiveVar on line 57
let caseSensitiveVar = 'Case matters';
console.log(caseSensitiveVar);

// Error 11:
let importantData =
  "This string must be logged to the console. It's important!";
console.log(importantData);

// Error 12: 
// tryToCallFunction();


// Error 15: 
// Fix: Make Hello World a string by adding single quotes around it. console.log to see results
let greeting = 'Hello, world!';
console.log(greeting);

// Error 16: 
// Fix: Remove extra semicolon on line 67 after parenthesis
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Error 17:
// Fix: Add a + sign before five on line 74 to convert it to a number, close with curly braces
let five = '5';
if (+five === 5) {
    console.log('Five is equal to 5'); // This one should be logged
} else {
    console.log('Five is not equal to 5'); }

// Error 18:
// Fix: Removed Array.prototype and added let to push on line 81
let push = function() {
    console.log('Array push method is overwritten');
};
let numbers = [];
numbers.push(1);
console.log(numbers);

// Error 19:
// Fix: Add let to x on line 90
let x = 5;
console.log(x);

// Error 20:
let myString = 'Hello';
myString = 'World';
console.log(myString); 
