function add(num1, num2) {
    return num1 + num2;
}
function printResult(num) {
    console.log("Result is : " + num);
}
var combineValue;
combineValue = add;
// combineValue =printResult
printResult(combineValue(1, 2));
