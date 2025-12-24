//get - get stuff from the object
//set - set stuff in the object

let user = {
    get name() {
        return this._name;
    },
    set name(value){
        this._name = value;
    },
}

user.name = "Pete";
console.log(user.name);

function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;
  
    // age is calculated from the current date and birthday
    Object.defineProperty(this, "age", {
      get() {
        let todayYear = new Date().getFullYear();
        return todayYear - this.birthday.getFullYear();
      }
    });
  }
  
let john = new User("John", new Date(1992, 6, 1));
  
console.log( john.birthday ); // birthday is available
console.log( john.age );      // ...as well as the age
