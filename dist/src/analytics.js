"use strict";
function sendAnalytics(data) {
    console.log(data);
}
sendAnalytics("Send this");
const clickbutton = document.querySelector("button");
function clickHandler(message) {
    console.log(message);
}
if (clickbutton) {
    clickbutton.addEventListener("click", clickHandler.bind(null, "Your Welcome"));
}
