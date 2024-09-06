// console.log("hello")


function greet(name:string,age:Date){
    console.log(`Hello ${name} your age is ${age}`)
}

// greet("Name",new Date())

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


//Interface
interface Person{
    name:string,
    age:number
}

const person:Person={
    name:"Alice",
    age:25
}

// console.log(person)


//Classes

class Animal{
    name:string

    constructor(name:string){
        this.name=name
    }

    speak():void{
        console.log(`${this.name} make animal noise`)
    }
}

const dog = new Animal("Dog")
dog.speak()


//Genrics

function identity<T>(args:T):T{
    return args
}

console.log(identity<number>(333))

//Union Types

function prindId(id:number | string):void{
    console.log(`ID:${id}`);
}

prindId(2680);
prindId("PCSGLOBAL");

//Tuple

let ourTuple:readonly [number,boolean,string]=[9,false,"string"]
// ourTuple = [false,"coding",1]


// Object

const car : {type:string,model:string,year:number}={
    type:"A",
    model:"B",
    year:2
}
//we can solve above by using the interface


const car2:{type:string,milage?:number}={
    type:"A",
}

//Enum : Is a special class that represents a group of constants 

enum CardinalDirections {
    North = 1,
    East,
    South,
    West
}

console.log(CardinalDirections.North)
console.log(CardinalDirections.West)

