"use strict";
const e1 = {
    name: "Mamzi",
    privilage: ["Programming"],
    startDate: new Date
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    if ('privilage' in emp) {
        console.log("Privilage: " + emp.privilage);
    }
    if ('startDate' in emp) {
        console.log("Start Date: " + emp.startDate);
    }
}
printEmployeeInformation(e1);
function moveAnimal(animal) {
    // if("flySpeed" in animal){
    //     console.log("Moving with speed:" + animal.flySpeed)
    // }
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flySpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving at speed: " + speed);
}
moveAnimal({ type: 'bird', flySpeed: 10 });
// const userInput =<HtmlInputElement> document.getElementById("user-input") !;
const userInputEL = document.getElementById("user-input");
if (userInputEL) {
    userInputEL.value = "Hi Mamzi";
}
