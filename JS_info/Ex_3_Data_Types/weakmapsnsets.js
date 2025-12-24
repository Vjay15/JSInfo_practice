let john = {name:"John"};
let array = [john];
let boom = john;
john = null;
console.log(array);
console.log(boom);

//The difference between maps and weakmaps is that
//weakmap keys should be objects
let weakMap = new WeakMap();
let obj = {item:1};

weakMap.set(obj,"ok");
// weakMap.set("test","Whoops");
john = {name:"John"};
weakMap.set(john,"this is a value");
console.log(weakMap);
// john=null;
// console.log(weakMap.delete(john));
console.log(weakMap.has(john));
console.log(weakMap.get(john));

let visitedSet = new WeakSet();
let mary = {name:"Mary"};
let ben = {name:"Ben"};
let pete = {name:"Pete"};

visitedSet.add(mary);
visitedSet.add(ben);
visitedSet.add(pete);

console.log(visitedSet.has(mary));
//mary=null;
// visitedSet.delete(mary);
console.log(visitedSet.has(mary));