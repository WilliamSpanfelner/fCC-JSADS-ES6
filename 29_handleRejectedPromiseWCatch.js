// Handle a Rejected Promise with cateh
// When a promise is rejected the catch method is used with the following syntax:
myPromise.catch(error => {

});
// where the error argument is passed to the reject method.

/* Add the catch method to your promise.  Use error as the parameter
of its callback function and log error to the console. */
const makeServerRequest = new Promise((resolve, reject) => {
// responseFromServer is set to false to represent an unsuccessful response from a server
let responseFromServer = false;
    
if(responseFromServer) {
    resolve("We got the data");
} else {  
    reject("Data not received");
}
});

makeServerRequest.then(result => {
console.log(result);
});

makeServerRequest.catch(error => {
    console.log(error);
});