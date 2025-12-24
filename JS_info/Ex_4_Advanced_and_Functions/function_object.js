//Functions are Objects in javascript

function printHi(){
    console.log("Hi");
}

console.log(printHi.name);

//same goes for function expression definitions

let printHi_2 = (a,b) =>{
    console.log(a+b);
}

console.log(printHi_2.name)
printHi_2(9,9);


function f1(a,b,c,d){
    return a+b+c+d;
}

console.log(f1.length);

function wow(){
    console.log("Hi");
    wow.counter++;
    // console.log(counter); //results in an error
}

wow.counter = 0; //does not create a variable, create properties

wow();
wow();
wow();

console.log(`The value of counter is ${wow.counter}`);

//Named Function Expressions

let nfe = function func(what){
    if(what){
        console.log(`This is ${what}`);
    }
    else{
        func("None");
    }
}

let nfe_2 = nfe;
nfe = null;
nfe_2();

//function can be created using new Function syntax

let mul = new Function('a','b','return a * b');
console.log(mul(3,2));

//functions created via this method are global scoped
//regardless of wherever they are created

globalThis.value = 15;
function getFunc(val){
    let value = 12;
    if(val==1){
        let func = new Function('console.log(value)');
        return func;
    }
    else{
        let func = function() {console.log(value);};
        return func;
    }
}

getFunc(2)();
getFunc(1)();