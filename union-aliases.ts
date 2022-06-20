type Conbindable = number | string


function combine (input1:Conbindable, input2:Conbindable) {
  
    let result ;
    if(typeof input1 ==='number' && typeof input2 ==='number') {
        result = input1 + input2;
    }
    else{
        result = input1.toString() + input2.toString()
    }
   return result
}

const conbineNames = combine("Mamzi" , "F");

console.log(conbineNames)