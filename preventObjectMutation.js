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
