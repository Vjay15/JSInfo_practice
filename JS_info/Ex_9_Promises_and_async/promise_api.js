// 6 static methods are there in Promise class

// Promise.all executes all the promises in an iterable

let promise = Promise.all([
    new Promise((resolve,reject) => setTimeout(() => resolve(1),1000)),
    new Promise((resolve,reject) => setTimeout(() => resolve(2),2000)),
    new Promise((resolve,reject) => setTimeout(() => resolve(3),3000)),
    4
]).then(response => console.log(response,"\n",typeof response));

// if one promise fails, rest of all the promise fails as well

// Promise.allSettled is same as all, but it makes sure all the promises are settled
let promise_ = Promise.allSettled([
    new Promise((resolve,reject) => setTimeout(() => resolve(1),1000)),
    new Promise((resolve,reject) => setTimeout(() => resolve(2),2000)),
    new Promise((resolve,reject) => setTimeout(() => reject(3),3000)),
]).then(response => {
    response.forEach((result) => {
        if(result.status == "fulfilled"){
            console.log(`The promise was successful and returned ${result.value}`);
        }
        if(result.status == "rejected"){
            console.log(`The promise was rejected with the reason ${result.reason}`);
        }
    })
});

// Promise.race just like the name suggests, returns the first completed promise
// in the iterable and gets its result or error
let promise_2 = Promise.race([
    new Promise((resolve,reject) => setTimeout(() => resolve(1),1000)),
    new Promise((resolve,reject) => setTimeout(() => resolve(2),2000)),
    new Promise((resolve,reject) => setTimeout(() => reject(3),3000)),
]).then(response => console.log(response));

// Promise.any similar to race but waits for the first fulfilled promise
// if all of them rejected return AggregateError

let promise_3 = Promise.any([
    new Promise((resolve,reject) => setTimeout(() => reject(1),1000)),
    new Promise((resolve,reject) => setTimeout(() => resolve(2),2000)),
    new Promise((resolve,reject) => setTimeout(() => reject(3),3000)),
]).then(response => console.log(response));

// The rest is Promise.reject, Promise.resolve which allows us to reject or 
// resolve a promise