//String Conversions
console.log("String Conversion")
let value = true;
let num = 12;
let inf = Infinity;
let nan = NaN;
console.log(String(value));
console.log(String(num));
console.log(String(inf));
console.log(String(nan));
console.log(null);
//Implicitly used by the alert() function to convert any value into a String 

//Numeric Conversion
console.log("\nNumeric Conversion")
num = "12";
let string = "HI, HELLO";

console.log(Number(value));
console.log(Number(num));
console.log(Number(12));
console.log(Number(string));
console.log(Number(inf));
console.log(Number(nan));
console.log(Number(""));
console.log("6"/"2"); //Implicit type conversion 
console.log(Number(null));
console.log(Number(undefined));

//Boolean Conversion
console.log("\nBoolean Conversion")
num = 12;
console.log(Boolean(num));
console.log(Boolean(nan));
console.log(Boolean(inf));
console.log(Boolean(""));
console.log(Boolean(string));
console.log(Boolean(" "));
console.log(Boolean(null));
console.log(Boolean(undefined));
