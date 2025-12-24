let user = {
    name:"Vjay",
}

let user1 = user;
console.log(user1);
console.log(user);

delete user.name;


console.log(user1);
console.log(user);

console.log("\nObjects defined using const are editable!")
const constantObject = {
    name:"Vjay",
};
console.log(constantObject);
constantObject.name = "Peter";
console.log(constantObject);

constantObject["Age"] = 30;
console.log(constantObject);

let newObject = {};
Object.assign(newObject,constantObject);
console.log(newObject);

console.log("\nCopying even the inside structure of the object")
let structuredObject = {
    name:"Vjay",
    properties: {
        age:"21",
        designation:"DevOps Engineer",
        area:"Chennai",
    },
}

let newStructureObject = structuredClone(structuredObject);
console.log(newStructureObject);
console.log(structuredObject.properties===newStructureObject.properties);

//But it doesnt work for if the nested object has a function value

let functionObject = {
    name:"Sum",
    function: function(a,b) {
        return a + b;
    },
}
//let newfunctionObject = structuredClone(functionObject);

console.log("\nAnother way to clone the objects");

let spreadObject = {
    name:"Vjay"
}

let newspreadObject = {...spreadObject};

console.log(spreadObject===newspreadObject);
console.log(spreadObject.name===newspreadObject.name);