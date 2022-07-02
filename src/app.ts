type Admin = { 
    name:string;
    privilage:string[];
}

type Employee = {
    name:string;
    startDate:Date
}

type ElevatedEmployee = Admin & Employee

const e1:ElevatedEmployee ={
    name:"Mamzi",
    privilage:["Programming"],
    startDate:new Date
}


type Combinable = string | number;
type Numric = number | boolean;

type Univeral = Combinable & Numric


function add(a:Combinable, b:Combinable){

if(typeof a === "string" || typeof b === "string"){
   return a.toString() + b.toString()
} 

return a+b 

}

type UnknownEmployee = Employee & Admin

function printEmployeeInformation(emp:UnknownEmployee){
    if('privilage' in emp){
        console.log("Privilage: " + emp.privilage)
    }
    if('startDate' in emp){
        console.log("Start Date: " +emp.startDate)
    }
}

printEmployeeInformation(e1)

interface Bird {
    type:"bird",
  flySpeed: number  
}

interface Horse{
    type:"horse",
    runningSpeed: number
}

type Animal = Bird | Horse


function moveAnimal(animal: Animal){

    // if("flySpeed" in animal){
    //     console.log("Moving with speed:" + animal.flySpeed)
    // }
    let speed ;
    switch(animal.type){
        case 'bird' : speed =animal.flySpeed;
        break;
        case 'horse' : speed = animal.runningSpeed
        break;
    }

    console.log("Moving at speed: " + speed); 
}

moveAnimal({type:'bird' , flySpeed:10})