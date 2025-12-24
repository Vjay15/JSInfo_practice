function printHello(){
    console.log("Hello");
}

setTimeout(printHello,1000);
//the first arg can also be a string like NFE only in browsers
// setTimeout("console.log('Hello')",1000);
function printHi(){
    console.log("Hi");
}
let timerId = setTimeout(printHi,2000);
console.log(timerId);
clearTimeout(timerId);
console.log(timerId);

timerId = setInterval(printHi,1000);

setTimeout(() => {clearTimeout(timerId);console.log("Stopped")},6000);

let timerIdButInterval = setTimeout(function tick(){
   console.log('tick');
   timerId_1 = setTimeout(tick,2000);
});

//why use this?
//More flexible than setInterval, allows you to set delay
//very flexibly
//another usage is the delay set by setInterval takes in the 
//time it takes for the function to finish execution
//but with setTimeout the delay can be added after the 
//function is executed