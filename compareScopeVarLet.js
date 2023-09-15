// Compare Scopes of the var and let Keywords
var numArray =[];
for (var i = 0; i < 3; i++) {
    numArray.push(i);
}
console.log(numArray);  // [ 0, 1, 2 ]
console.log(i);  // 3

// the var keyword effectively makes 'i' a global variable
var numbersArray = [];
var i;  // The var keyword here effectively makes i globally available.
for (i = 0; i < 3; i++) {
    numbersArray.push(i);
}
console.log(numbersArray); 
console.log(i);

// the global value isn't alway intuitive
var printNumTwo;
for (var i = 0; i < 3; i++) {
    if (i === 2) {
        printNumTwo = function() {
            return i;  // The expectation is that i will have a value of 2
        }
    }
}
console.log(printNumTwo());  // The value 3 is assigned to i counterintuitively...


// Observe the effect of the let keyword
let printNoTwo;
for (let i = 0; i < 3; i++) {  // i is not in the global scpoe here
    if (i === 2) {
        printNoTwo = function() {
            return i;
        };
    }
}
console.log(printNoTwo());  // 2
console.log(i);  // i is not defined


/*
Fix the code so that i declared in the if statement is separate 
from the i declared in the first line of the function. The var 
keyword cannot be used anywhere.
*/

function checkScope() {
    let i = 'function scope';  // changed var to let
    if (true) {
        let i = 'block scope';  // added let 
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}