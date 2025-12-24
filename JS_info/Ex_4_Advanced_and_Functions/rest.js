function sum(...args){ //args is the array that stores the values
    let total = 0;
    for(let num of args){
        total += num;
    }
    return total;
};

console.log(sum(1,2,3,4,5));

//the ... should be present at the end of the function params

function showName(){
    for(let arg of arguments){ //arguments are array like but 
        console.log(arg);      //but not exactly arrays
    }
}

showName("Billa","Unni",'Harry');

//arrow functions do not have their own this, therefore 
//no arguments

// let showArg = () => {
//     for(let arg of arguments){
//         console.log(arg);
//     }
// }

// showArg(1,2,3,4);

function sumSpread(){
    let total = 0;
    for(let args of arguments){
        total += args;
    }
    return total;
}

let array = [1,2,3];
console.log(sumSpread(array));
console.log(sumSpread(...array));
console.log(sumSpread(1,...array,2));

let str = "Hello";
console.log([...str]); //similar to Array.from(str)
console.log(Array.from(str));

let arrayCopy = [...array];
console.log(array===arrayCopy);

let object = {a:1,b:2,c:3};
let copyObject = {...object};

console.log(copyObject);
console.log(object===copyObject);