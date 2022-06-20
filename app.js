function add(num1, num2) {
    return num1 + num2;
}
function addHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
function printResult(num) {
    console.log("Result is : " + num);
}
var combineValue;
combineValue = add;
// combineValue =printResult
printResult(combineValue(1, 2));
addHandle(10, "20", function (ansewer) {
    console.log(ansewer);
});
