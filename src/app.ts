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

