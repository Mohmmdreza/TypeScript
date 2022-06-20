// const button = document.querySelector("button") ;
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;
// function add(num1:number, num2:number) {
//     return num1 + num2
// }
// button.addEventListener("click", function () {
//   console.log(add(+input1.value, +input2.value))
//  })
function add(num1, num2, showResult, phrase) {
    // if(typeof num1 !== "number" || typeof num2 !== "number"){
    //     throw new Error("incorrect type!")
    // }
    var result = num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    }
    else
        return num1 + num2;
}
var number1 = 5;
var number2 = 6;
var printResult = true;
var resultPhrase = "Phrase is: ";
var result = add(number1, number2, printResult, resultPhrase);
