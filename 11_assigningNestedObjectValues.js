// Use Destructuring Assignment to Assign Variables from Nested Objects
const user = {
    johnDoe: {
        age: 34,
        email: 'johnDoe@freeCodeCamp.com'
    }
};

// To extract the values and assign them to variables of the same name:
const {johnDoe: {age, email}} = user;
console.log(age, email);  // 34 johnDoe@freeCodeCamp.com

// Assign property values to vars with different names:
const {johnDoe: {age: userAge, email: userEmail}} = user;
console.log(userAge, userEmail);  // 34 johnDoe@freeCodeCamp.com