let url = "www.exmple.com"

fetch(url)
    .then(response => {
    console.log(response.headers);
    })
    .catch(error => {
        if((error instanceof TypeError) & !(url.includes("https://"))){
            return fetch("https://"+url);
        }
        else {
            throw new Error("The given error is not solvable");
        }
    })
    .then(response => {
    console.log(response.headers);
    })
    .catch(error => console.log(error.name,error.message));


new Promise((resolve,reject) =>
{
    setTimeout(reject("Just rejecting it"),5000);
})

process.on('unhandledRejection', (reason) => {
    console.log("Unhandled rejection: ",reason);
})