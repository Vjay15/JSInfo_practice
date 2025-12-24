let user = prompt("Who's there?");
if(user.toLowerCase() === "cancel"){
    alert("Cancelled");
}
else if(user.toLowerCase() === "admin"){
    let pwd = prompt("Enter the password:");
    if(pwd==="TheMaster"){
        alert("Welcome!");
    }
    else if(pwd===null || pwd===''){
        alert("Cancelled");
    }
    else{
        alert("Wrong Password");
    }
}
else{
    alert("I don't know you");
}