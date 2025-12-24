async function f() {
    let response = await fetch("https://example.com");
    return response; 
}

f().then(response => {console.log(response)}).catch(
    error => {
        console.log(error.name,error.message);
    }
);