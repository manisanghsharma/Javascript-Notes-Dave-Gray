//Promises

const myPromise = new Promise((resolve, reject) => {
    const error = true;
    if(error===false){
        resolve("Yes, I have resolved the promise!");
    }
    else{
        reject("No! I rejected the promise.");
    }
})

console.log(myPromise);

// myPromise.then(value => {
//     console.log(value); //Value if resolved
// })

//New promise - timeout
//Javascript does not wait for 
const myNewPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("New Promise Resolved!");
    }, 3000);
})

myNewPromise.then(value => {
    console.log(value);
})


//Chaining Thenables

//resolve the value, then add 1, then log the new value
myPromise.then(value => {
    return value + 1;
})
.then(newValue => {
    console.log(newValue);
})


//For catching errors and logging them
.catch(err => {
    console.log(err);
})







