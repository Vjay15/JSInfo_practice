let employees = [
    {FirstName: "John", LastName: "Doe", age: 26, salary: 50000, department: "Engineering"},
    {FirstName: "Jane", LastName: "Smith", age: 32, salary: 75000, department: "Marketing"},
    {FirstName: "Bob", LastName: "Johnson", age: 25, salary: 90000, department: "Engineering"},
    {FirstName: "Alice", LastName: "Williams", age: 28, salary: 60000, department: "Sales"},
    {FirstName: "Charlie", LastName: "Brown", age: 35, salary: 80000, department: "Engineering"},
    {FirstName: "Diana", LastName: "Davis", age: 29, salary: 55000, department: "Marketing"}
];

function combineName(emp) {
    const {FirstName,LastName,...rest} = emp;
    return {Name: FirstName + " " + LastName,...rest};
};
let mapResult = employees.map(employees => employees.FirstName + " " + employees.LastName);
console.log("Trying out map!");
console.log(mapResult);

console.log("\nTrying it out once more time")
let mapResult2 = employees.map(emp => combineName(emp));
console.log(mapResult2);

let filterResult = employees.filter(employees => employees.age < 30);
console.log("\nTrying out filter!")
console.log(filterResult)

let reduceResult = employees.reduce((acc,cur) => {
    let dept = cur.department;
    if(dept in acc){
        acc[dept] = acc[dept] + cur.salary;
    }
    else {
        acc[dept] = cur.salary;
    }
    return acc
},{});
console.log("\nTrying out reduce!")
console.log(reduceResult)

let combineResult = employees.filter(
    employees => employees.age < 30
).map(emp => {
    const {salary,...rest} = emp;
    return{...rest,salary:salary*12};
}).reduce((acc,cur) => {
    dept = cur.department;
    if(dept in acc){
        acc[dept].total += cur.salary;
        acc[dept].count += 1;
    }
    else{
        acc[dept] = {total:cur.salary,count:1};
    }
    return acc
},{})
console.log("\nTrying out combined pipeline of all the functions");
console.log(combineResult);