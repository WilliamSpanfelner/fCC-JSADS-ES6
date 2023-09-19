// Complete a Promise with resolve and reject
// A promise has three states: pending, fulfilled, and rejected.

const myPromise = new Promise((resolve, reject) => {
   if (condition here) {
    resolve("Promise was fulfilled");
   } else {
    reject("Promise was rejected");
   }
});