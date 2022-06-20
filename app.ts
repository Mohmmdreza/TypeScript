function add (num1 :number , num2:number):number{
    return num1 + num2;
}

function printResult (num:number):void{
    console.log("Result is : " + num);
}

let combineValue :(a:number , b:number)=>number;

 combineValue = add;

// combineValue =printResult


printResult(combineValue(1,2))