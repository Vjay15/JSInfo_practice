class Rabbit {};
let rabbit = new Rabbit()

console.log(rabbit instanceof Rabbit);

function Rabbit1(){};
console.log(new Rabbit1() instanceof Rabbit1);

// If the behavior of instacneof has to be modified, then use
// static[Symbol.hasInstance](obj){
//      if(obj.isInstance) return true;
//}
// it checks prototypes of prototypes if the above method is not mentioned in the
// object using objA.isPrototypeOf(objB)

let user = {
    [Symbol.toStringTag]:"User"
};

console.log({}.toString.call(user));

console.log({}.toString.call(Rabbit));