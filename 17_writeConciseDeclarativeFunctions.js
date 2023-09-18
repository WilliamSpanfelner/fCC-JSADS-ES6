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