// Use Destructuring Assignment to Assign Variables from Arrays
// const [a, b] = [1, 2, 3, 4, 5, 6];  // the first two elements are assigned to a and b respectively
// console.log(a, b);  // 1 2

// const [a, b,,, c] = [1, 2, 3, 4, 5, 6];  // access any index using commas
// console.log(a, b, c);  // 1 2 5

// Use destructuring assignment to swap the values of a and b so that a receives
// the value stored in b, and b receives the value stored in a.
let a = 8, b = 6;
[a, b] = [b, a];
console.log(a, b);  // 6 8