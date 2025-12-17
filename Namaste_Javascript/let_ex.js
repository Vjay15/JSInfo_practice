// let is hoisted but not declared
// console.log(x);

let x = 20;

function hello(){
    return () => {
        let x = 30;
        console.log(x);
    };
};

function hello2(){
    return () => {
        let x = 40;
        console.log(x);
    }
}

let y = hello();
y();
y = hello2();
y();

