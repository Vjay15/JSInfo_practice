let animal = {
    eats:true,
    walk() {
        console.log("This animal can walk")
    },
    isSleeping(){
        this.sleeping=true;
    }
};

let rabbit = {
    jumps:true,
    //__proto__:animal can be initialised this way as well
};

rabbit.__proto__ = animal;

console.log(rabbit.eats,rabbit.jumps);
rabbit.walk();

rabbit.walk = () => {
    console.log("This animal can run");
}

rabbit.walk();
rabbit.isSleeping()
console.log(rabbit.sleeping); //this points to the object before the '.'
console.log(animal.sleeping);

for(let prop in rabbit) console.log(prop); //returns all the properties along with 
//prototype inehrited properties

for(let prop in rabbit){
    let isNotInherited = rabbit.hasOwnProperty(prop);
    (isNotInherited)? console.log(`${prop} is not inherited`):console.log(`${prop} is inherited`);
}

