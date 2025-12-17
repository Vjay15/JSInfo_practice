let x = 5;
console.log(x);

function callback() {
    console.log("Hello from Timeout");
};

setTimeout(callback,1000);

Promise.resolve().then(() => {
    console.log("Promise.resolve");
});

console.log("testing the async func");

// making the task queues wait
const startDate = new Date().getTime();
let endDate = new Date().getTime();

while (endDate != startDate + 5000){
    endDate = new Date().getTime();
};

console.log("5 Seconds done");