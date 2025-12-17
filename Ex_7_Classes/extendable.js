class powerString extends String{
    isEmpty(){
        return this.length==0;
    }
}

let str = new powerString("Hello");
console.log(str);
console.log(str.isEmpty());

// built in methods return the same new class method instead of the parent
// in case if the method should return the primitive class use
// static get [Symbol.species]() {
// return Array(or the initial one)
// }
// Built in classes dont inherit statics
