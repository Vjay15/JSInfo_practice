function Employee(name,designation){
    this.name = name;
    this.designation = designation;
    this.access = false
    this.changeAccess = () => {
        this.access = true;
    }
}

let newEmp1 = new Employee("Vjay","Intern");
console.log(newEmp1);
newEmp1.changeAccess();
console.log(newEmp1);

//Usually constructors dont return anything but in case
//if it returns anything, the "this" object is ignored

function BigUser(name) {
    this.name = this.name;
    
    return {name:"Deigo"};
}

console.log(new BigUser("Arun"));

//parantheses can also be omitted!

//.? is used for optional chaining

let randomObject = {
    name:"Vjay",
}

console.log(randomObject?.name);
console.log(randomObject?.age);