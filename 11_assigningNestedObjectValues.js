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

// Replace the two assignments with an equivalent destructuring assignment.
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line
    
  const lowToday = LOCAL_FORECAST.today.low;
  const highToday = LOCAL_FORECAST.today.high;
  
  // Only change code above this line