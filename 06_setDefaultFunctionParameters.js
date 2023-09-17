// Set Default Parameters for Your Functions
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));  // Hello John
console.log(greeting());  // Hello Anonymous

// Add default parameter to the function
const increment = (number, value) => number + value;
