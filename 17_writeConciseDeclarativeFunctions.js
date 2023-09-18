// Write Concise Declarative Functions with ES6
// const person = {
//     name: "Taylor",
//     sayHello: function() {
//         return `Hello! My name is ${this.name}.`;
//     }
// };

// ES6 allow the ommision of the function keyword, so person becomes:
const person = {
    name: "Taylor",
    sayHello() {
        return `Hello! My name is ${this.name}.`;
    }
};
console.log(person.sayHello());  // Hello! My name is Taylor.

/*
 Refactor the function setGear inside the object bicycle
 to use the shorthand syntax described above.
 */
// Only change code below this line
const bicycle = {
    gear: 2,
    setGear: function(newGear) {
      this.gear = newGear;
    }
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);