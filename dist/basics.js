"use strict";
// const button = document.querySelector("button") ;
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;
const AddNumber = (num1, num2, showResult, phrase) => {
    // if(typeof num1 !== "number" || typeof num2 !== "number"){
    //     throw new Error("incorrect type!")
    // }
    let result = num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    }
    else
        return num1 + num2;
};
let number1;
number1 = 5;
const number2 = 6;
const showResult = true;
const resultPhrase = "Phrase is: ";
const result = AddNumber(number1, number2, showResult, resultPhrase);
