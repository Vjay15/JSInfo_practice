let arr = new Array();
arr = [];

let array = ["Banana","Apple","Guava"];

console.log(array);
for(i=0;i<array.length;i++){
    console.log(array[i]);
}

console.log(array.length);

let randomArray = ['Apple', {name:"John"}, true, function(){console.log("Hello")}];
console.log(randomArray[1].name);
randomArray[3]();

console.log(array[-1]);
console.log(array.at(-1));

console.log("\nStack Operations");
let stack = [1,2,3];
console.log(stack.pop());
console.log(stack);
stack.push(1);
console.log(stack);

console.log("\nQueue Operations");
let queue = [1,2,3];
console.log(queue.shift());
console.log(queue);
console.log(queue.unshift(3));
console.log(queue);
//push/pop is much fasater than shift/unshift

console.log("\nArray access");
for(let index in queue){
    console.log(index);
}; //Dont use for arrays 

for(let element of queue){
    console.log(element)
}

let fruits = [];
fruits[123]=1;

console.log(fruits.length);

let numbers = [1,2,3,4,5];
numbers.length = 3;
console.log(numbers);
numbers.length = 6;
console.log(numbers);


let number = [1,2,3];
console.log(String(number));
console.log([1,2]+1);


console.log([] == []);
console.log(0 == []);
console.log('0' == []);


console.log("\nWays to delete elements");
let stuff = ["Hello","this","is","crazy"];
delete stuff[1];
console.log(stuff,stuff.length);
stuff[1] = "this";
console.log(stuff);
stuff.splice(1,1);
console.log(stuff);
stuff.splice(1,2,"is","not","hello");
console.log(stuff);

console.log("\nMisc Functions");
console.log(stuff.slice(1,3));

let newArray = ["thing","right?"];

console.log(stuff.concat(newArray));
console.log(stuff+newArray);

let trialObject = {
    0: "wow",
    1:"hungry",
}
console.log(stuff.concat(trialObject));
trialObject = {
    'hello': "wow",
    0:"hungry",
    [Symbol.isConcatSpreadable]: true,
    length:2
};
console.log(trialObject);
console.log(stuff.concat(trialObject));

["Bilbo", "Gandalf", "Nazgul"].forEach(item => console.log(item));
["Bilbo", "Gandalf", "Nazgul"].forEach((item,index,array) => console.log(`The ${item} is in index ${index} in ${array}`));

console.log("\nSearching for elements in the array");
let anotherArrayObject = [1,0,5,2,1,3,4];
console.log(anotherArrayObject.indexOf(0));
console.log(anotherArrayObject.indexOf(1,1));
console.log(anotherArrayObject.includes(1));
console.log(anotherArrayObject.includes(3));
console.log(anotherArrayObject.lastIndexOf(1));
//includes also takes in NaN values so yay

console.log("\nfind() function")
let divBy2 = anotherArrayObject.find((item,index,array) => item%2===0 && index>2);
console.log(divBy2);
let divBy2Index = anotherArrayObject.findIndex((item,index,array) => item%2===0 && index>2);
let divBy2IndexLast = anotherArrayObject.findLastIndex((item,index,array) => item%2===0 && index>1);
console.log(divBy2Index);
console.log(divBy2IndexLast);

console.log("filter(), map(), reduce()");
let divBy2Elements = anotherArrayObject.filter((item,index,array)=> item%2==0 && index>2);
console.log(divBy2Elements);
let divBy2ElementsMapped = anotherArrayObject.map((item)=> item+anotherArrayObject.length);
console.log(divBy2ElementsMapped);
let divBy2ElementsReduced = anotherArrayObject.reduce((acc,item)=>{
    if(item%2==0){
        acc += item;
    }
    return acc;
},0)
console.log(divBy2ElementsReduced);
//reduceRight is the same but from right to left
console.log("\nsort()");
let unsortedArray = [9,5,2,8,1];
console.log(`Before sorting: ${unsortedArray}`);
console.log(unsortedArray.sort());
let unsortedArrayHUH = [1,15,26,3];
console.log(unsortedArrayHUH.sort());
function compareNumeric(a,b){
    if(a>b) return 1;
    if(a==b) return 0;
    if(a<b) return -1;
}
console.log(unsortedArrayHUH.sort(compareNumeric));
console.log(unsortedArrayHUH.sort((a,b) => {return a-b}));
console.log(unsortedArray.reverse());

console.log("\nSplit and join");
let randomString = "Guava,Apple,Orange";
let randArray = randomString.split(",",2);
console.log(randArray);
console.log(randArray.join("/"));

console.log("\nArrays are treated as objects so use Array.isArray() to check if array or not");
console.log(Array.isArray([]));