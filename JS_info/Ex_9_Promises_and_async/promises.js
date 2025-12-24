console.log(new Promise(function (resolve, reject) {
    setTimeout(() => resolve("done"), 1000);
}))

let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("done"), 1000);
})

promise.then(
    result => console.log(result),
    error => console.log(error)
);

let promise_1 = new Promise(function (resolve, reject) {
    setTimeout(() => reject("not done"), 1000)
})

function callback(val) {
    console.log(`The result is : ${val}`)
}

promise_1.then(
    result => callback(result),
    error => callback(error)
).finally(
    () => { console.log("Promise is done"); }
);

let errpromise = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error("Test Error")), 1000);
})

// catch is only used if the error is only required to be caught
errpromise.catch(error => {console.log("Error Recieved:",error.message);return 403}).then(code =>
    {
    console.log(`Error code Recieved ${code}`);
    return 1;
    }
).finally(code => {
    console.log(`Promise exited with code ${code}`) 
});
// finally does not take any args, nor takes 
