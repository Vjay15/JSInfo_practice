let count = 0;
function counter(){
    let count = 0;
    return function(){
        debugger;
        console.log(++count);
    }
}

let counterFunction = counter(); 
//counterFunction.[[Environment]] stores a reference to the
//Lexical Environment

counterFunction();
counterFunction();
counterFunction();
counterFunction();
counterFunction();

console.log(count);

function f(){
    let value = 200;
    function g() {
        debugger;
    }
    return g;
}

let g = f();
g();

//IIFE - Immediatelly Invoked Function Expression
(function(){
    var something = "Hello"
    console.log(something);
})();

// console.log(something); // results in an error since var is gone