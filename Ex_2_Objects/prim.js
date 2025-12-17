console.log("Using the Symbol.toPrimitive and hints")
let user = {
    id:1,
    name:"Vjay",
    age:21,

    [Symbol.toPrimitive](hint) {
        console.log(`Hint: ${hint}`);
        return hint=="string"?`{id:${this.id},name:${this.name},age:${this.age}}`:this.age;
    }
};

console.log(user + "Trial string");
console.log(+user);
console.log(String(user))

console.log("\nUsing valueOf and toString")
let user2 = {
    id:1,
    name:"Vjay",
    age:21,
    valueOf(){
        return this.age;
    },
    toString(){
        return `{id:${this.id},name:${this.name},age:${this.age}}`
    }
}


console.log(user2 + "Trial string");
console.log(+user2);
console.log(String(user2))

