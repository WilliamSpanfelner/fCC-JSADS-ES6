// Destructuring via rest elements
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);  // 1 2
console.log(arr);  // [ 3, 4, 5, 7 ]  the remainder of the array is stored 
// in arr due to the rest syntax - note: this must be last item in list.


