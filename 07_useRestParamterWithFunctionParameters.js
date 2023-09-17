// Use the Rest Parameters with Function Parameters
// The rest parameter allow functions to take a variable 
// number of arguments
function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
}

console.log(howMany(0, 1, 2));  // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3, 4, 5], {}));  // You have passed 4 arguments.

// Modify the sum function to use the rest argument
const sum = (x, y, z) => {
    const args = [x, y, z];
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}