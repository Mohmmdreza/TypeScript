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
