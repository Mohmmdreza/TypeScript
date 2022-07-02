
interface Named {
   readonly name?: string;

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
    name?:string;
    age=30;

    constructor(n?:string){
       if(n){
        this.name = n;
       }
    }
    greet(phrase:string){

        if(this.name){
        console.log(phrase + " " + this.name)
    }
    console.log("Hi")
    }
} 



let user1:Greetable

user1= new Person("mm")

user1.greet("Hi there - i am")