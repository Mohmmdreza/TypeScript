function sendAnalytics(data){
    console.log(data)
}

sendAnalytics("Send this");


const button = document.querySelector("button")!;

function clickHandler(message:string){
    console.log(message)
}

if(button){
button.addEventListener("click",clickHandler.bind(null , "Your Welcome"));
}
