console.log("Inside the statement the values get converted into boolean values");

function test_val(val){
    if(val){
        console.log("The values returns true");
    }
    else{
        console.log("The value returns false");
    }
}

let arr = ["",null,undefined,NaN,0,"Literally a string",1,Infinity];
arr.forEach(val => {
    console.log(`The value is ${val}`)
    test_val(val);
});

let age = 1231223;
let message = (age<3)?"You are a baby":(age<10)?"You are a kid":(age<18)?"You are a teen":(age<100)?"You are an adult":"You've got to be kidding me";
console.log(message);

(1=="1")?console.log("They are equal"):console.log("They are not equal");