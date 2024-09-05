console.log("hello")


function greet(name:string,age:Date){
    console.log(`Hello ${name} your age is ${age}`)
}

greet("Name",new Date())

let obj1:any={
    x:1
}
// No error bcoz of any type
// obj1.foo()
// obj1()


let myName:string = "asdf"

function fnNumber():number{
    return 10
}


async function fetchData():Promise<object>{
    return {
        name:"name"
    }
}


let age:number=30;
let username:string="John";


function greetUser(name:string):string{
    return `Hello ${name}`
}

let numbers:number[] = [1,2,3,4];
let persons:[string,number]=["John",80]

interface Person{
    name:string,
    age:number
}

const person:Person={
    name:"Alice",
    age:25
}

console.log(person)