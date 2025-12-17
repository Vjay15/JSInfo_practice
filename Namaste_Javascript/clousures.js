var x = 20;
function enclose() {
    let x = 30;
    function square() {
        console.log(x**2);
    };
    return square;
};

let func = enclose();

func();

//did a mistake before where two functions cant have the same name

function enclosed(func){
    let x = 256;
    console.log(func(x));
}
console.log(x);

let sqrt = (y) => {
    return y**0.5
}

console.log(enclosed(sqrt))

// variables cant be redeclared once declared using var
/* var x = 9;
let x = 50;
console.log(x)
*/
