// which var does the function use
var x = 20;
var x = 50;
console.log(x);
function hello() {
    var x = 30;
    console.log(x);
};

hello();
console.log(x);