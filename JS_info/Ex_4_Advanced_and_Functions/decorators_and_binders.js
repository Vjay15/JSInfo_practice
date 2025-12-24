//why caching?
function cachingDecorator(func){
    let cache = new Map();

    return function(x){
        if(cache.has(x)){
            console.log("Retrieved from cache");
            return cache.get(x);
        }
        let result = func.call(this,x);
        cache.set(x,result);

        return result;
    }
}

function powe(x){
    return Math.E**x;
}

powe = cachingDecorator(powe);

console.log(powe(1));
console.log(powe(1));

//functions when passed on to a different variable via
//reference results in the function losing the context to it
//for example when you call a function func(x)
//it gets resolved to func(context,x)
//incase of global function that remains undefined and thats
//fine but incase of functions defined inside an object
//they need context to know what "this" maps to!

//Example
let newObject = {
    name:"Vjay",
    printName(x){
        console.log(x + this.name);
        return x+this.name;
    },
    func(x){
        return this.printName(x);
    },
}
newObject.func("Hello");

newObject.func = cachingDecorator(newObject.func);

// console.log(cachedFunction("Hi"));

//This gets called as cachedFunction(undefined,x) leading
//to errors, whoops

console.log(newObject.func("Hi"));

//binders
console.log("\nBinders");
let user = {
    firstName:"Vjay"
}

function first(){
    console.log(this.firstName);
}

let funcUser = first.bind(user);
funcUser();

//bind can also bind arguments aka partial binding

let a=1,b=2;

function sum(a,b){
    return a+b;
}

let bindSum = sum.bind(null,2);

console.log(bindSum(3));