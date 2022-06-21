let userInput:unknown
let userName:string

if(typeof userInput ==="string"){
userName = userInput
}


function generateError(message:string , code:number):never{
    throw{message:message , errorCode:code};
}

generateError("This is an error" , 500)