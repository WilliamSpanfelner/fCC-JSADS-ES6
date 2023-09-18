// Use Destructuring Assignment to Pass an Object as a Function's Parameters

// Destructuring can happen in a function argument

// To destructure an object sent to a function:
// const profileUpdate = (profileData) => {
//     const { name, age, nationality, location } = profileData;
// }

// The above can also be done in-place:
const profileUpdate = ({ name, age, nationality, location }) => {

}
// the destructure parameters are now available for use in the function.

/* 
Use destructuring assignment within the argument to the function half 
to send only max and min values inside the function.
*/

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Only change code below this line
  const half = (stats) => (stats.max + stats.min) / 2.0; 
  // Only change code above this line