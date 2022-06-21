"use strict";
// const person:{
//     name: string;
//     age: number;
// } = { name : "Mamzi" , age: 21}
const person = {
    name: "Mamzi",
    age: 21,
    hobbies: ["Sport", "Food"],
    role: [1, "author"]
};
let favoriteActivities;
favoriteActivities = ["Sport"];
for (let hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
console.log(person);
