//There are property flags that allow us to define
//the default way that it behaves
//writable - if true value can be changed otherwise readonly
//enumerable - if true, listed in loops otherwise not listed
//configurable - if true, property can be deleted and attributes
//modified, otherwise not

let obj = {
    name:"Vjay",
    age:21,
};

let descriptor = Object.getOwnPropertyDescriptor(obj,'name');
console.log(descriptor);

//you can set the values using defineProperty

Object.defineProperty(obj,'name',{writable:false});

obj.name="Something Else";

console.log(obj);

//to define multiple properties
Object.defineProperties(
    obj,
    {
        name:{value:"Vjay",writable:false},
        age: {value:21,writable:false},
    }
);

obj.age = 24;
console.log(obj);

//preventExtensions(obj) - Forbids addition of new props
//seal(obj) - configurable:false
//freeze(obj) - configurable:false, writeable:false
//isExtensible(obj) - false if properties is forbidden, true otherwise
//isSealed(obj) - true if add/remove props is forbidden
//isFrozen(obj) - return true if add/remove/change props


