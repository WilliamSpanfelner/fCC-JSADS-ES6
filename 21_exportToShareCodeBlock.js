// Use export to Share a Code Block
/* If there were a file called math_functions.js 
containing a function called add, it could be exported like this: */

// export const add = (x, y) => {
//     return x + y;
// }

// The above could also be written:
const add = (x, y) => {
    return x + y;
}

// export { add };

// Export multiple things:
export { add, subtract };

/* There are two string-related functions in the editor. 
Export both of them using the method of your choice. */
const uppercaseString = (string) => {
    return string.toUpperCase();
}
  
const lowercaseString = (string) => {
    return string.toLowerCase();
}

export { uppercaseString, lowercaseString };