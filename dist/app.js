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
const add = (a, b) => a + b;
const printOutput = output => console.log(output);
const button = document.querySelector("button");
if (button) {
    button.addEventListener("click", event => console.log(event));
}
printOutput(add(5, 2));
