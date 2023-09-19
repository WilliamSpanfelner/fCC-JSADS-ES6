// Create an Export Fallback with export default
/* Export default is used when there is only one 
value and it is often used as a fallback. 
Below a named function and an anonymous function 
are exported.
*/
export default function add(x, y) {
    return x + y;
}

export default function(x, y) {
    return x + y;
}

/* Only one value can be a default export in each 
module or file.  The keywords var, let, or const cannot
be used with export default. */

/* the following function should be the fallback value for the 
module. Please add the necessary code to do so. */

export default function subtract(x, y) {
    return x - y;
}