let map = new Map();

map.set(1,'A number');
map.set('1','A string');
map.set(true,'A Boolean');
map.set({name:"An object"},'An Object');
console.log(map);
console.log(map.keys());
console.log(map.values());
console.log(map.entries());
console.log(map.get(1));
console.log(map.has('1'));
console.log(map.size);
map.delete(1);
console.log(map);

let mapFromArray = new Map([
    [1,"A"],
    [2,"B"],
    [3,"C"],
    [4,"D"],
]);
console.log(mapFromArray);

let prices = Object.fromEntries(mapFromArray);
console.log(prices);
mapFromArray.clear();
console.log(mapFromArray);
console.log(prices);
console.log("\n");

let set = new Set();
set.add(1);
set.add('a');
set.add(true);
set.add({a:1});
set.add({a:1}); //checks for references instead of values for objects
console.log(set);
console.log(set.size);
set.has(1);
// The below functions are created for compatibility with maps
console.log(set.keys());
console.log(set.values());
console.log(set.entries());
//Looping over a set
for(let value of set){
    console.log(value);
}
set.clear();
console.log(set);