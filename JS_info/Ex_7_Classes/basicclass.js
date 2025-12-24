class User{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    sayHi(){
        console.log(`The user is ${this.name} and their age is ${this.age}`);
    }
}

let user = new User('Vjay',21);
user.sayHi();
console.log(typeof User);
// Basically the Class takes the code under constructor and forms a function!

// Even if the class is a function, it cannot be called
// User();  Error: Class constructor User cannot be invoked without 'new'

//It is still represented as Class
console.log(User);

let Userexp = class {
    sayHi() {
        console.log("Hello from a class expression");
    }
}

let a = new Userexp();
a.sayHi();

//returning classes
function makeClass() {
    return class {
        sayHi(){
            console.log("Hello from a function");
        }
    }
}

let b = makeClass();

new b().sayHi();

//Making setters and getters
class Pet {
    constructor(name,breed){
        this.name = name;
        this.breed = breed;
    }

    get name(){
        return this._name;
    }

    set name(value){
        if(value.length<3){
            console.log("Name too small");
            return;
        }
        this._name = value;
    }
}

let doggy = new Pet('Bruno','Husky');
console.log(doggy.name);

doggy.name='pe';

doggy.name='Allen';

console.log(doggy.name);

//computer names
class class1 {
    ['say' + 'Hi'](){
        console.log("Hello from a computer function name");
    }
}

new class1().sayHi();


//class fields

class heya {
    name="Arun";
    sayHi(){
        console.log(`Hello, this is ${this.name}`);
    }
}

new heya().sayHi();

// if the method of a class is passed to another function, it can lose context
// i.e the 'this' therefore we need to make the function a function expression 
// defined using the arrow function

class Button{
    og_name = "button12312"; //class fields
    constructor(name){
        this.name = name;
    }

    click = () => {
        console.log(this.name);
    }
}

console.log(Button.og_name); //returns undefined
console.log(new Button().og_name);

let button = new Button("Yippee");

setTimeout(button.click,1000)
// this is possible because the click function is now created uniquely for each 
// instance of the class

