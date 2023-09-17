// Use the Rest Parameters with Function Parameters
// The rest parameter allow functions to take a variable 
// number of arguments
function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
}

console.log(howMany(0, 1, 2));  // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3, 4, 5], {}));  // You have passed 4 arguments.