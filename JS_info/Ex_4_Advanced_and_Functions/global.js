console.log("Hello");
global.console.log("Hello") ;
globalThis.console.log("Hello");

var hello = 2; //this is global in browser
//let and const are block scoped

if(global.Promise){
    console.log("Promise exists");
}