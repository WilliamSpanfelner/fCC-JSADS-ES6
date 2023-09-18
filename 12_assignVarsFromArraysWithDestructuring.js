// Use Destructuring Assignment to Assign Variables from Arrays
// const [a, b] = [1, 2, 3, 4, 5, 6];  // the first two elements are assigned to a and b respectively
// console.log(a, b);  // 1 2

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];  // access any index using commas
console.log(a, b, c);  // 1 2 5