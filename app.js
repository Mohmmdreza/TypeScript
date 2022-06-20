// const person:{
//     name: string;
//     age: number;
// } = { name : "Mamzi" , age: 21}
var person = {
    name: "Mamzi", age: 21, hobbies: ["Sport", "Food"]
};
var favoriteActivities;
favoriteActivities = ["Sport"];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
console.log(person);
