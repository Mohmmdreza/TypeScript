
interface Named {
   readonly name: string;

}
interface Greetable extends Named {
    greet (phrase:string):void ;
}

interface AddFn{
    (a:number , b:number):number
}

let add:AddF;

add = (n1:number , n2:number)=>{
    return n1 + n2
}

class Person implements Greetable{
    name:string;
    age=30;

    constructor(n:string){
        this.name = n;
    }
    greet(phrase:string){
        console.log(phrase + " " + this.name)
    }
} 



let user1:Greetable

user1= new Person("Mamzi")

user1.greet("Hi there - i am")