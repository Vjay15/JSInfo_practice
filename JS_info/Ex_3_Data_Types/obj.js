let newObject = {
    name:"Vjay",
    age:21,
    place:"Chennai",
}

console.log(Object.keys(newObject));
console.log(Object.values(newObject));
console.log(Object.entries(newObject));

//Transforming objects
let prices = {
    PS5:499,
    "Steam Deck":549,
    RAM:599,
}

let Indian_prices = Object.fromEntries(
    Object.entries(prices).map(
        entry => [entry[0],entry[1]*89.30]
    )
);

console.log(Indian_prices);