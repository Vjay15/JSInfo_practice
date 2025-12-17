//JSON is very much useful to send data over the internet
let circularObject;
let testObject = {
    id:1,
    name:"John",
    designation:"Backend Developer",
    product:"ThriveSparrow",
    YoE:3,
    active:true,
    phone:[1231231231,12312312],
    access:{
        isAdmin:false,
        isDeveloper:true,
    },
    extra:null,
    sayHI() {
        console.log("Hello");
    }, //ignored
    [Symbol("id")]:123, //ignored
    something:undefined, //ignored
};
circularObject = {
    object:testObject,
}
// testObject.object = circularObject;
let json = JSON.stringify(circularObject);
console.log(json);
console.log("\n");
let json_2 = JSON.stringify(testObject,["id","name","access","isAdmin","isDeveloper"]);
console.log(json_2);
console.log("\n");
let json_3 = JSON.stringify(testObject, function replacer(key,value){
    return (key=="object")? undefined:value;
},2);
console.log(json_3);

console.log(typeof json);

//Date object has its own toJSON function to convert the dates
//into JSON, very useful, let's implement our own

let Roll_Number = {
    number:270,
    name:"Vjaylakshman K",
    toJSON() {
        return this.number;
    }
};

let meet = {
    title:"About JSON in JavaScript",
    Host:Roll_Number,
};
console.log(JSON.stringify(meet));

console.log(JSON.parse(json));
//we can also have an optional reviver function just like replacer if
//required