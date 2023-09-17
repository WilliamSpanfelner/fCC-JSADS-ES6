// Use the Spread Operator to Evaluate Arrays In-Place
/* The spread operator allows the expansion of 
arrays and other expressions where multiple 
parameters are expected*/

// var arr = [6, 89, 3, 45];
// var maximus = Math.max.apply(null, arr);  // Math.max expects comma separated vals but not an array 
// hence the use of the apply function.

// The spread operator allow us to write:
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
console.log(maximus);  // 89 - Return unpacked array and only works in-place

// Copy all contents of arr1 into another array arr2 using the spread operator.
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];

console.log(arr2);