let billion = 1_000_000_000;
let billion_bute = 1e9;
console.log(billion);
console.log(billion_bute);
let dec = 1e-5;
console.log(dec);

console.log("\nStartswith 0x for Hex, 0b for Binary, 0o for octal");
console.log(0xff);
console.log(0b11111111);
console.log(0o377);

console.log("Maximum base is 36")
let num = 255;
console.log(num.toString()); //base 10
console.log(num.toString(2)); //base 2
console.log(num.toString(16)); //base 16
console.log(num.toString(36)); //base 36

//to call method on a number use two dots
console.log(12345..toString(36));


console.log("\nRounding")

let arr = [3.1,-3.1,3.5,-3.5];
for(j in arr){
    let i = arr[j];
    console.log(`\nThe value is ${i}`);
    console.log(Math.floor(i));
    console.log(Math.ceil(i));
    console.log(Math.round(i));
    console.log(Math.trunc(i));
}

console.log("\nTo round to the nth digit use toFixed(n)");

let number = 3.572357;
console.log(+number.toFixed(2)); //toFixed returns string, so need to convert to number

console.log("\nImprecise calculations");
//64 bit numbers only, 52 bits to store the number
//11 bit to store decimal precision, 1 bit to store sign
//no real way to store fractions instead rounds it off to the nearest
//closest decimal number therefore
console.log(0.1+0.2);
//so needs to be handled by toFixed, so it doenst cause any issues

console.log("\nTests for numbers");
//isNaN and isFinite tried to combine the args to numbers and checks them
let array = ["15","str",Infinity,NaN];

for(i in array){
    let j = array[i];
    console.log(`The value is ${j}`);
    console.log(isNaN(j));
    console.log(isFinite(j));
}

console.log("\nParsing values with their metrics");

let vals = ["100px","12.5em","a123"];
for(i in vals){
    let j = vals[i];
    console.log(`The value is ${j}`);
    console.log(parseInt(j));
    console.log(parseFloat(j)) 
}

console.log(Math.random());