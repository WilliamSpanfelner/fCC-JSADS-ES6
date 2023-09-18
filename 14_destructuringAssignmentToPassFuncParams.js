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

