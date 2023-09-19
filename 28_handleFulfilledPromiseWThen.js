// Handle a Fulfilled Promise with then
// Immediately after a promise is fulfilled the then method is executed.

myPromise.then(result => {

});

// where result derives from the argument given to the resolve method.

/*
Add the then method to your promise. Use result as the
parameter of its callback function and log result to 
the console.
*/
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });