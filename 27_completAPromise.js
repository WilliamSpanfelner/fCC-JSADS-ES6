// Complete a Promise with resolve and reject
// A promise has three states: pending, fulfilled, and rejected.

const myPromise = new Promise((resolve, reject) => {
   if (condition here) {
    resolve("Promise was fulfilled");
   } else {
    reject("Promise was rejected");
   }
});

/* Make the promise handle success and failure. If responseFromServer 
is true, call the resolve method to successfully complet the promise.
Pass resolve a string with the value "We got the data".  If 
responseFromServer is false, use the reject method instead and pass
it the string: "Data not received". */

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });