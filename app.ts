// const person:{
//     name: string;
//     age: number;
// } = { name : "Mamzi" , age: 21}

const person ={
    name: "Mamzi" , age:21 , hobbies :["Sport" , "Food"]
}

let favoriteActivities:string[];

favoriteActivities = ["Sport"];

for ( let hobby of person.hobbies){
    console.log(hobby.toUpperCase())
}

console.log(person)