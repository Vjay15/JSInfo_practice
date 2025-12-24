function sayHello(){
    return //This results in return; since the return value 
           //is pushed to the next line instead of the same line
    ("Hello");
}

sayHello()

// defining functions based on a given scenario 
let age = 21;
let welcome;
if(age<18){
    welcome = function() {
        console.log("Hello kiddo");
    }
}
else{
    welcome = function () {
        console.log("Hello Sir/Mam")
    }
}

let newfunc = (age<21)?function (){
    console.log("You can't drink!")
}: function() {
    console.log("You can drink!");
};

let offer = (age<10)?() => {
    console.log("You get a discount!")
}: function() {
    console.log("Sorry only for kids!")
}
welcome();
newfunc()
offer()