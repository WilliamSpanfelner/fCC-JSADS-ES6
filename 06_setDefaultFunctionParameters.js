// Set Default Parameters for Your Functions
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));  // Hello John
console.log(greeting());  // Hello Anonymous

// Add default parameter to the function
const increment = (number, value = 1) => number + value;

console.log(increment(4));  // 5
console.log(increment(4, 2));  // 6