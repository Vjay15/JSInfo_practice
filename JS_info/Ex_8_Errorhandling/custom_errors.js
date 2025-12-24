class InvalidError extends Error {
    constructor(message){
        super(message);
        this.name = "InvalidError";
    }
}
function test(){
    let age = "12312"
    if(!(age instanceof Number)){
        throw new InvalidError("Given age is not in number format");
    }
}
test();
// try{
//     test();
// }
// catch(err){
//     console.log(err.message);
//     console.log(err.name);
//     console.log(err.stack);
// }