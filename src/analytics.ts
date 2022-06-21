function sendAnalytics(data: string) {
  console.log(data)
}

sendAnalytics("Send this")

const clickbutton = document.querySelector("button")! as HTMLButtonElement

function clickHandler(message: string) {
  console.log(message)
}

if (clickbutton) {
  clickbutton.addEventListener("click", clickHandler.bind(null, "Your Welcome"))
}
