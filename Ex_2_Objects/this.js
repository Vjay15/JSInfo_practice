let user = {
     printName: function(){
         console.log(this.name)
     },
     name:"Vjay",
}

user = {
    printName() {
        console.log(this.name)
    },
    name:"Vjay",
}

user.printName();

// The value of this is evaluated during runtime
function printAge(){
    console.log(this.age);
};

let user1 = {...user}; 
user.age = 21;
user1.name = "Nagul";
user1.age = 20;
user.f = printAge;
user1.f = printAge;

user.f(); user1.f();

let testObject = {
    firstName:"Mike",
    sayHi () {
        let firstName = "Billa";
        let arrow = () => console.log(this.firstName);
        arrow();
    },
};
testObject.sayHi()

let coolObject = {
    num:0,
    increment() {
        this.num++;
        console.log(this.num);
        return this;
    },
    decerement() {
        this.num--;
        console.log(this.num);
        return this;
    },
    showValue() {
        console.log(this.num);
        return this;
    }
}

coolObject.increment().decerement().increment().increment().showValue().decerement().showValue();