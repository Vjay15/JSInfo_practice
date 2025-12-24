//__proto__ is deprecated, therefore use prototype methods
let animal = {
    eats:true,
    walk() {
        console.log("This animal can walk")
    },
    isSleeping(){
        this.sleeping=true;
    }
};

//to assign prototype to an object from creation
let rabbit = Object.create(animal,
    {
        jumps:{
            value:true,
            enumerable:true
        } //in the property descriptors format
    }
); //makes animal the prototype of rabbit

console.log(rabbit.eats);
console.log(rabbit.jumps);

//to get prototype of an object
console.log(`\nPrototype of rabbit object`);
console.log(Object.getPrototypeOf(rabbit));

//to set prototype
let rabbit2 = {
    awake:true
}

console.log(`\nPrototype of rabbit2 object`);
Object.setPrototypeOf(rabbit2,animal);
console.log(Object.getPrototypeOf(rabbit2));

//to get property descriptors
console.log("\nProperty Descriptors of rabbit object");
console.log(Object.getOwnPropertyDescriptors(rabbit));
rabbit['jumps'] = false;
console.log(rabbit);

//very plain dictionaries
console.log("\nCreating plain dictionaries");
let obj = Object.create(null);
console.log(`${Object.getPrototypeOf(obj)} is the property of the plain object`);
obj.one = 1;
obj.two = 2;
//console.log(obj.keys()); results in error since this object does not have any 
//prototype set
console.log(Object.keys(obj));
