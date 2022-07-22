"use strict";
const numbers = [];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is True");
    }, 2000);
});
