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
const hobbies = ["Sport", "Food"];
const activityHobbies = ["Hiking"];
activityHobbies.push(...hobbies); //or  activityHobbies = ["Hiking" , ...hobbies] 
const person = {
    name: "Mamzi", age: 21
};
const copiedPerson = Object.assign({}, person);
console.log(copiedPerson);
