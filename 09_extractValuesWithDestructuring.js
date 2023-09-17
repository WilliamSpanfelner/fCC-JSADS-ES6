// Use Destructuring Assignment to Extract Values from Objects
// Destructuring assignment neatly assigns values taken
//  directly from an object

const user = {name: 'John Doe', age: 34}

// const name = user.name;
// const age = user.age;

// console.log(name);  // John Doe
// console.log(age);  // 34

// Destructuring syntax  allows us to write:
const { name, age } = user;

console.log(name);  // John Doe
console.log(age);  // 34

// Replace the two assignments with an equivalent 
// destructuring assignment.

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  const today = HIGH_TEMPERATURES.today;
  const tomorrow = HIGH_TEMPERATURES.tomorrow;
  
  // Only change code above this line