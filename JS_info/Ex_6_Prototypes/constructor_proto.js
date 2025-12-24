let animal = {
    eats:true,
};

function Rabbit(name){
    this.name = name;
}

Rabbit.prototype=animal;

let rabbit = new Rabbit('John');

console.log(rabbit);
console.log(rabbit.eats);

Rabbit.prototype = {
    eats:true,
    constructor:Rabbit
}

console.log(Rabbit.prototype.constructor==Rabbit);

let rabbit2 = new rabbit.constructor("Willy");

console.log(rabbit,rabbit2);
console.log(typeof rabbit2);

