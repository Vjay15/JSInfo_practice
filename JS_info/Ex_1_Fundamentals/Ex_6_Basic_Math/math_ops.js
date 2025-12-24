//unary 
console.log("unary operations")
let x = 1;
x = -x;
console.log(x);
x = +x;
console.log(x);

//binary
console.log("binary operations")
let y = 1, z = 3;
console.log(y-x);

//Maths operations
console.log("\nMaths")
console.log("add",y+x);
console.log("sub",y-x);
console.log("mul",y*x);
console.log("div",y/x);
console.log("mod",y%x);
console.log("exp",y**x);

//string concatenation
console.log("\nString Concatenation")
console.log("Hello" + " People");
console.log(1+'5');
console.log('6'+1);
console.log(5+5+'6');
console.log(5+'5'+6)
console.log('5'+5+6);
console.log('6'+'2');
console.log('-6'-'2');


//shorthand for Number() operation
console.log("\nShorthand for Number")
console.log(+true);
console.log(+'6');
console.log(+null);

console.log("\nOperator Precedence: unary>exponents>mul/div>add/sub>shifting>relational>bitwise>assignment")
console.log(4*6/2);
console.log(4/2*3);

//assignment operator

console.log("\nAssignments")
//the operator can be used in normal operations since it returns a value
let a = 1;
let b = 2;
let c = 3;
console.log(3 - (a=b+c-1));
a = b = c = 2+2;
console.log(a,b,c);


console.log("\nInplace modifiers");
//shorthand operations 
let n = 2;
n += 2;
console.log(n);
n *= 2;
console.log(n);
n += 5+5;
console.log(n);

console.log("\nIncrement and Decrement Operations")
// if before variable increment and then do the operation, else 
// if after variable do the operation and then increment
// only can be done to a variable
let counter = 5;
//counter = counter + 5++;
let v = counter++;
console.log(v);
v = ++counter;
console.log(v);


console.log("\nBitwise operations")
console.log(1&0);
console.log(1|0);
a=1,b=2,c=3;
console.log(a^b); // 1 ^ 10
console.log(~1);
console.log(2>>1);
console.log(2<<1);
console.log(-4>>>1,"wadahell");
console.log((-4).toString(2));
console.log((-4>>>1).toString(2));

console.log("\nComma operation");
let m = (1+2,3+4);
console.log(m);
//Usually used for for loops
for(let i = 0, j = 5;i<j;i++,j--){
    console.log(i,j);
};
//it has the lowest precedence
b = (2+3,4+3);
console.log(b);
b = 2+3,4+3;
console.log(b);

console.log("\nAll the space character gets converted to 0 by default");
console.log("\t"-2);
console.log("\n"-2);