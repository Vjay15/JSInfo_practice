// mixin is a class containing methods that can be used by other classes 
// without a need to inherit from it

// simplest way to add mixin
let testMixin = {
    sayHi(){
        console.log(`Hello ${this.name}`);
    },
    sayBye(){
        console.log(`Bye ${this.name}`);
    }
}

class User {
    constructor(name){
        this.name=name;
    }
}

Object.assign(User.prototype,testMixin);

new User("Vjay").sayHi();
new User("Vjay").sayBye();

// The mixin allows inheritances in mixin to be transferred to an object