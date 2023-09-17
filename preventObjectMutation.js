// While a const declaration doesn't prevent mutation, 
// the Object.freeze function can help.
let obj = {
    name: "FreeCodeCamp",
    review: "Awesome"
};
Object.freeze(obj);  // Object is 'frozen' on execution
obj.review = "bad";
obj.newProp = "Test";
console.log(obj);  // { name: 'FreeCodeCamp', review: 'Awesome' }


// Prevent constants from changing
function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS);
    // Only change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI);