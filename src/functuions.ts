function add (num1 :number , num2:number):number{
    return num1 + num2;
}

function addHandle(n1:number , n2:number , cb:(num:number)=> void){
    let result = n1 + n2;
    cb(result);
}

function printResult (num:number):void{
    console.log("Result is : " + num);
}

let combineValue :(a:number , b:number)=>number;

 combineValue = add;

// combineValue =printResult


printResult(combineValue(1,2))


addHandle(10 , 20 , (ansewer)=>{
    console.log(ansewer)
})