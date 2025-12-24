console.log("OR returns the first truthy value or the last value if false")
console.log(0||""||null)
console.log(0||null||"Hello"||"Hi");

console.log("\nAND returns the first false value or the last value if all true");
console.log("Hi"&&0&&"");
console.log("HI"&&"hello"&&"peepo"&&67);

console.log(!true);//convert boolean values
console.log(!!"Hello");//converts values to boolean values

console.log(undefined&&null);
console.log(null&&undefined);

console.log("&& has more operator precedence than ||");
console.log(null||2&&3||4);

console.log("?? Nullish coalescing operator same precedence as || but not allowed to use with || or &&")
let name,wow;
console.log(name ?? "Hello");