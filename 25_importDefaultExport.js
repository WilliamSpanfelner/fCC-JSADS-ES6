// Import a Default Export
/* A different import syntax is required to use an
export default - no curly braces are used and the 
imported value is simply a variable name*/

import add from "./math_functions.js";

/* In the following code, import the default export from the 
math_functions.js file, found in the same directory as this file. 
Give the import the name subtract. */

import subtract from "./math_functions.js";
// Only change code above this line

subtract(7,4);