// the const keyword is useful for assignin values that are constants
const s = [5, 6, 7];
// s = [1, 2, 3];  
/* Attempting to re-assign to a const variable results 
in a TypeError: Assignment to constant variable. */

s[2] = 45;  // the contents of s can be amended
console.log(s);  // [ 5, 6, 45 ]


const t = [5, 7, 2];
function editInPlace() {
    const element = t[2];
    t.pop();
    t.unshift(element);
    console.log(element, t);
}
editInPlace();