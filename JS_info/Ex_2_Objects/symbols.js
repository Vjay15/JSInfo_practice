let id = Symbol("This is an id")
let id2 = Symbol("This is an id")
console.log(id==id2);
console.log(id);
let newObject = {
    id:0
}
console.log(newObject);
newObject[id] = 1;
newObject[Symbol("This is an id")] = 3;
console.log(newObject);

newObject[id]=2;
console.log(newObject);

console.log(Object.keys(newObject));
for(keys in newObject) {
    console.log(keys);
}


let newId = Symbol.for("This is an id too!");
let newId2 = Symbol.for("This is an id too!");

console.log(newId==newId2);