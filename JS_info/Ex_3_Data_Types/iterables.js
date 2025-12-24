//iterables are created using Object[Symbol.iterator] variable
//It can be defined outside or inside an object, but outside is preferred
//since it doesnt cause any changes to the object itself

let range = {
    from:1,
    to:5
}

range[Symbol.iterator] = function() {
    return {
        current:this.from,
        last:this.to,

        next(){
            if(this.current<=this.last){
                return {done:false,value:this.current++};
            } else {
                return {done:true};
            }
        }
    }
}

for(let num of range){
    console.log(num);
}

let str = "Henry";
for(let char of str){
    console.log(char);

}
for(let index in str){
    console.log(str[index]);
}

let arrayLike = {
    0:"wow",
    1:"amazing",
    length:2
}

console.log(Array.from(arrayLike));

console.log(Array.from(str));