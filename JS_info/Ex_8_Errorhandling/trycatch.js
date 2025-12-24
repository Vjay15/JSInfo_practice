// Trycatch only works for runtime errors, for parse time errors, the error is 
// displayed instead of being handled by try catch
// also trycatch is sync and cannot handle async errors, if there is a need to
// catch an exception from an async function, the try catch should be wrapped 
// inside a function

// Invalid function
// try{
//     setTimeout(function() {
//         noVar;
//     },5000);
// }
// catch{
//     console.log("The callback function is invalid");
// }

// Valid function
setTimeout(function(){
    try{
        noVar;
    }
    catch(err){
        console.log("The block inside try is invalid\n",err.name,err.message);
        console.log(err.stack);
    }
},1000)

// catch(err) can be written as catch in order to omit error details

// to throw custom errors we can use throw an error object

try {
    let age = -1
    if (age<0){
    throw new RangeError("Value is less than 0 - no negative values allowed");
    }
}
catch(err){
    console.log(err);
}
finally{
    console.log("\nTry catch successfully run")
}


// in case of error specific catch, we can use instanceof
// catch(err){
//     if(err instanceof ReferenceError){
//         console.log(err);
//     }
//     else if(err instanceof TypeError){
//         console.log(err);
//     }
//     else{
//         console.log(err);
//     }
// }

