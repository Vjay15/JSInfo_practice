// The language is dynamically typed but there are data types

console.log(typeof undefined);
console.log(typeof Infinity);
console.log(typeof NaN);
console.log(typeof 0);
console.log(typeof 10n);
console.log(typeof true);
console.log(typeof "foo");
console.log(typeof Symbol("id"));
console.log(typeof Math);
console.log(typeof null);
console.log(typeof setTimeout);

// Javascript is type safe

console.log("Hello"/2);

console.log(`Hello This is a backtick ${1+1}`)
function returnHello() {
    return "Hello";
};
console.log(`Hello This is a backtick ${returnHello()}`)