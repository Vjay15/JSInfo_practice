class Animal {
    constructor(name){
        this.speed=0;
        this.name=name;
    }

    run(speed){
        this.speed = speed;
        console.log(`${this.name} now runs at ${this.speed} km/h`);
    }
    stop(){
        this.speed = 0;
        console.log(`${this.name} has stopped running`);
    }
}

class Dog extends Animal {
    constructor(name,breed){
        super(name);
        this.breed = breed;
    }

    bark(){
        console.log(`${this.name} is barking!`);
    }

    stop(){
        super.stop();
        this.bark();
    }
}

let dog = new Dog('Bruno','German Shepherd');
dog.run(50);
dog.bark();
dog.stop();

// arrow functions do not have super, usually taken from an outer function instead
// of itself, same geos for anonymous functions

// in case of class fields, they can't be overridden since the class field is 
// initialized before constructor in the base class and immediately after super()
// for the derived class