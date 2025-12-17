let newArray = [1,2,3];
let [one,two,three] = newArray;
console.log(one,two,three);
let [a,b,c] = "abc";
console.log(a,b,c);

let newMap = new Map([
    [1,"one"],
    [2,"two"],
    [3,"three"],
]);

for([key,value] of newMap){
    console.log(`The ${key}'s values is ${value}`);
}

let [single,...rest]= newArray;
console.log(single);
console.log(rest,rest.length);

let[fname="Unknown",sname="Unknown"]=["Billie"]; //Default value if not assigned
console.log(fname,sname);

let newObject = {
    name:"Vjay",
    age:21,
    place:"Chennai",
}

let {name,age,place} = newObject; 
//Variable name should match the object's key name, values can also be 
//assigned
console.log(name,age,place)
//if need to assign to a different var
let user = {
    name: "John",
    years: 30
  };
  
let {name:name_1, years: age_1, isAdmin = false} = user;
console.log(name_1,age_1,isAdmin);


let anotherObject = {
    Name:"Vjay",
    Place: {
        street:"Sundaram Nagar",
        area:"Guduvanchery",
        pincode:603202,
    },
    Age:21
}

let {Name,
    Place:{
        street,area,pincode
    },
    Age,
    newAccount=true
} = anotherObject;

console.log(Name,Age,newAccount,pincode);



//passing Objects as function params
let functionObject = {
    a:5,
    b:6
};

function sumOfThree({a=0,b=0,c=0}={}){
   return a+b+c 
}
console.log(sumOfThree(functionObject));
console.log(sumOfThree());