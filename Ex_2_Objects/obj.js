let user = new Object();
user = {
    name: "John",
    age:30,
    "is above 30?":true
};

console.log(user);

console.log("\nAccessing properties");
console.log("It can be accessed using '.' or obj[key]");
console.log(`user.name = ${user.name}`);
for(key in user){
    console.log(`${key}'s value is ${user[key]}`)
}

console.log("\nDeleting Age property")
delete user.age;
console.log(user);

console.log("\nComputed Properties");
let object,pen;
let pouch = {
    [object]:5,
    [pen + " pen"]:3,
}
object = "Eraser";
pen = "Fountain";

console.log(pouch)

console.log("\nShorthand to create objects");
function createObject(id,name){
    return {
        id,  //shorthand for id:id
        name, //shorthand for name:name
    };
}

console.log(createObject(1,"Vjay"));

console.log("\nNo limitations on property names");
let newObject = {
    3:"this is a number",
    '+0':"This is also a number but now it's at the top",
    let:"This is a keyword but object doesnt care about it",
}
console.log(newObject);
console.log("Checking if 3 is inside the object:",3 in newObject);