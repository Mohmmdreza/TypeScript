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
    name:string
    private employees:string[] =[]

    constructor(name:string){
        this.name = name
    }

    describe(this: Departments){
        console.log("Department:" + this.name)
        console.log(this)
    }

    addEmployee(employee:string){
        this.employees.push(employee)
    }


    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees)
    }

}

const accounting = new Departments ("Accounting");



accounting.describe();

accounting.addEmployee("Mamzi");
accounting.addEmployee("Mahdi")

accounting.employees[2]="Anna"

accounting.printEmployeeInformation()

// const copyAccounting ={name:"MAMZI" , describe:accounting.describe}

// copyAccounting.describe();

console.log(accounting)
