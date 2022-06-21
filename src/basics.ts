// const button = document.querySelector("button") ;
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;

// function add(num1:number, num2:number) {
//     return num1 + num2
// }

// button.addEventListener("click", function () {
//   console.log(add(+input1.value, +input2.value))
//  })
type DefineNumber = (
  num1: number,
  num2: number,
  showResult: boolean,
  resultPhrase: string
) => void | number

const AddNumber: DefineNumber = (
  num1: number,
  num2: number,
  showResult: boolean,
  phrase: string
) => {
  // if(typeof num1 !== "number" || typeof num2 !== "number"){
  //     throw new Error("incorrect type!")
  // }

  let result = num1 + num2

  if (showResult) {
    console.log(phrase + result)
  } else return num1 + num2
}

let number1: number
number1 = 5
const number2: number = 6
const showResult: boolean = true
const resultPhrase: string = "Phrase is: "

const result = AddNumber(number1, number2, showResult, resultPhrase)
