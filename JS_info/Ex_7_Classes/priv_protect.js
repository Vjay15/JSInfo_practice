// to let someone know that a given variable is supposed to be protected we 
// mention it using '_' and prevent setting by not providing a setter

class class1 {
    constructor(value){
        this._id1 = value;
    }

    get id1() {
        return this._id1;
    }
    // set id1(value){
    //     this._id1 = value;
    //     console.log("The value has been successfully set")
    // }
}

let c = new class1(200);

console.log(`${c.id1} is accessible`);

c.id1 = 400;

console.log(`${c.id1} is accessible`);

// Private variables

class class2{
    #waterLimit = 200;

    #fixWaterLimit(value){
        if(value<0) return 0;
        if(value>this.#waterLimit) return this.#waterLimit;
    }

    setWaterLimit(value){
        if(this.#fixWaterLimit(value)){
            this.#waterLimit = value;
            console.log("Water Limit has been successfully set");
        }
        else{
            console.log("Water Limit is below given limits");
        }
    }
}

let c2 = new class2();
// c2.#fixWaterLimit(200);
c2.setWaterLimit(123);
c2.setWaterLimit(1999);