// Reuse JavaScript Code Using Import
// import allows loading of parts of files or modules
import { add } from './math_functions.js';

// multiple imports syntax:
import { add, subtract } from './math_functions.js';

/* Add the appropriate import statement that will allow the 
current file to use the uppercaseString and lowercaseString
functions you exported in the previous lesson.  These functions
are in the file called string_functions.js, which is in the 
same directory as the current file. */
  
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");