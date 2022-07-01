"use strict";
// const button = document.querySelector("button") !;
// button.addEventListener("click",()=>{
//     console.log("Click")
// })
// var result;
// let age = 29;
// function add(a:number , b:number){
//     result = a+b;
//     return result;
// }
// console.log(result);    
// if(age > 20){
//     let isOld =true
// }
// console.log(isOld)
// const add = (a:number , b:number)=>  a + b;
// const printOutput:(a:number | string) => void = output => console.log(output);
// const button = document.querySelector("button");
// if(button){
//     button.addEgitventListener("click", event => console.log(event))
// }
// printOutput(add(5,2))
// const hobbies = ["Sport" , "Food"] ; 
// const activityHobbies = ["Hiking"] 
// activityHobbies.push(...hobbies);  //or  activityHobbies = ["Hiking" , ...hobbies] 
// const person ={
//     name:"Mamzi", age:21
// }
// const copiedPerson = {...person}
// const plusNum = (...numbers: number[]) =>{
//     console.log(numbers)
//     return numbers.reduce((curResult,curValue)=>{
//             return curResult + curValue
//     }, 0)
// }
// const addNumbers = plusNum(1,2,3,4,5)
// console.log(addNumbers)
class Departments {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // id:string;
        // name:string
        this.employees = [];
        this.id = id;
        this.name = name;
    }
    describe() {
        console.log(`Department(${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Departments {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class AccountingDepartment extends Departments {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReport() {
        console.log(this.reports);
    }
}
const it = new ITDepartment("d1", ['Mamzi']);
it.describe();
it.addEmployee("Mamzi");
it.addEmployee("Mahdi");
// it.employees[2]="Anna"
it.name = "NEW NAME";
it.printEmployeeInformation();
// const copyit ={name:"MAMZI" , describe:it.describe}
// copyit.describe();
console.log(it);
const accounting = new AccountingDepartment("d2", []);
accounting.addReport("Test reports");
accounting.printReport();
