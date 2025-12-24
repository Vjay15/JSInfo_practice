// all promises can be chained, in order to allow chained operations

function rand(){
    return (Math.random()*10);
}

let promise = new Promise((resolve,reject) =>{
    setTimeout(resolve(rand()),1000);
}).then(
    result => {
        console.log(result);
        if(result<5){
            return true;
        }
        else{
            return false;
        }
    }
).then(
    result => {
        if(result){
            console.log("The promise has successfully executed")
        }
        else{
            throw new Error("The number was more than 5");
        }
    }
).catch(
    error => {console.log(`The promise has failed because: ${error.message}`)}
);

fetch('https://www.eample.com')
    .then(response => response.headers)
    .then(json => {console.log(json)})
    .catch(error => {console.log(error.message,error.name,"\n",error.stack)});
