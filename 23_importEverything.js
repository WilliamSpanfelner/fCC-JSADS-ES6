// Use * to Import Everything from a File
// import * as allows the entire file to be imported
import * as myMathModule from './math_functions.js';  // myMathModule is just a name and can be anything

// The add and subtract functions discussed previously can be used like this:
myMathModule.add(2, 3);
myMathModule.subtract(5, 3);

/* The code in this file requires the contents of the file string_functions.js, 
that is in the same directory as the current file.  Use the import * as syntax 
to import everything from the file into an object called stringFunctions. */

import * as stringFunctions from './string_functions.js';
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");