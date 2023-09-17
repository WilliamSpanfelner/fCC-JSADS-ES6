// Use Arrow Functions to Write Concise Anonymous Functions
/*
    Anonymous functions can be written as follows:
    const myFunc = function() {
        const myVar = "value";
        return myVar;
    }

    ES6 permits the following syntax:
    const myFunc = () => {
        const myVar = "value";
        return myVar;
    }

    Brevity increases when there is only a return statement 
    and no function body:
    const myFunc = () => "value";
*/

// Rewrite the function using arrow function syntax
var magic = function() {
    return new Date();
}