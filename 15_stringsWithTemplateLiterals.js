// Create Strings using Template Literals

// A template literal makes creating complex strings easier.
const person = {
    name: "Zodiac Hasbro",
    age: 56,
};

const greeting = `Hello, my name is ${person.name}! 
I am ${person.age} years old.`;
console.log(greeting);

// Create an array of list element strings.
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);