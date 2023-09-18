// Write Concise Object Literal Declarations Using Object Property Shorthand
// const getMousePosition = (x, y) => ({
//     x: x,
//     y: y
// });

// ES6 allows the same function elimating the redundancy
const getMousePosition = (x, y) => ({ x, y });

/* 
Use object property shorthand with object literals to create
and return an object with name, age and gender properties.
*/
const createPerson = (name, age, gender) => {
    // Only change code below this line
    return {
      name: name,
      age: age,
      gender: gender
    };
    // Only change code above this line
  };