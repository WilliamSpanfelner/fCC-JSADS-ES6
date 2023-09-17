// Write Arrow Functions with Parameters
const doubler = (item) => item * 2;
doubler(4); 

// The parentheses surrounding a single parameter are not required
// const doubler = item => item * 2;  // the doubler assignment becomes even more breif

// Muliple arguments may also be passed to an arrow function
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);

// Rewrite myConcat function to use arrow function syntax
// var myConcat = function(arr1, arr2) {
//     return arr1.concat(arr2);
// }

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));  // [ 1, 2, 3, 4, 5 ]