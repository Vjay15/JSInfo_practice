let userName = prompt("What is your Name?");
let check = confirm(`Is your name: ${userName}`);
if(check){
    alert(`Welcome ${userName}`);
}
else{
    alert("Guess you dont know your name well enough!")
}
