// Compare Scopes of the var and let Keywords
var numArray =[];
for (var i = 0; i < 3; i++) {
    numArray.push(i);
}
console.log(numArray);  // [ 0, 1, 2 ]
console.log(i);  // 3

// the var keyword effectively makes 'i' a global variable

var numbersArray = [];
var i;  // The var keyword here effectively makes i globally available.
for (i = 0; i < 3; i++) {
    numbersArray.push(i);
}
console.log(numbersArray); 
console.log(i);


