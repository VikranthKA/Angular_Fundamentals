// console.log("hello")


// function greet(name:string,age:Date){
//     console.log(`Hello ${name} your age is ${age}`)
// }

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
// interface Person{
//     name:string,
//     age:number
// }

// const person:Person={
//     name:"Alice",
//     age:25
// }

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
// dog.speak()


//Genrics

function identity<T>(args:T):T{
    return args
}

// console.log(identity<number>(333))

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

// console.log(CardinalDirections.North)
// console.log(CardinalDirections.West)

/*
______________________________________________________________________________________________________________
*/

//9-9-24


//function

function addNumber(a:number=10,b:number=a):void{
    // console.log(a*b) 
}

//Rest Parameters
function add(a:number,b:number,...rest:number[]){
    console.log(a,b,rest)
    return rest.reduce((cv,acc)=>cv+acc,0)

}

// console.log(add(10,10,10,10),"rest operator")

//Special Type

let value1 :any =true;
value1 = "string"
// console.log(value1)//no error

let value2:unknown = 1;
value2 = 3
// console.log(typeof value2,"type")

let value3:never
// value3="st"

let value4:undefined

let value5:null


// Type Alias
//TS
type CarYear = number | string
type CarModel = string
type CarColors = string[]

//type are const variables

type Car = {
    year:CarYear,
    model:CarModel,
    colors:CarColors
}


//Casting is the Type of overriding the a type:explictly

//as

let someValue :unknown = "string"
let strLength:number=(someValue as string).length

//angle-brackets <> not for JSX

let strLength2:number = (<string>someValue).length

//Classes
// public-(default) allows access to the class member from anywhere
//private -     only allows access to the class member from within the class
//protected - allows access  to the class   member  from itself  and any classes that inherit it

class Person {
    private name: string;
    public age: number;
    protected date:number=0;

    public constructor(name: string, age: number,date?:number) {
        this.name = name;
        this.age = age;
        if(date !== undefined){
            this.date = date
        }
    }

    public getDate():number{
        return this.date
    }

    public getName(): string {
        return this.name;
    }
}

class User1 extends Person{
    private isAlive : boolean=true;

    constructor(name:string,age:number,date:number,isAlive:boolean){
        super(name,age,date);
        this.isAlive=isAlive
    }

    public checkIsAlive(){
        console.log(`The User ${this.getName()} of date ${this.getDate()} is alive ${this.isAlive}`)
    }
}

const person = new Person("John", 25,2024);
// console.log(person.getName())
// console.log(person.name)//Error becoz of private

const user = new User1("Jane",30,2024,true)
user.checkIsAlive()

/*
______________________________________________________________________________________________________________
*/
//10-9-24
//implements : When a class implements an interface, it must define all the properties and methods specified in the interface. However, we can free to add the additional properties and methods beyond those defined in the interface

interface AnimalInterface{
    name:string;
    speak():void;
}

class Cat implements AnimalInterface{
    name : string;//bcoz of AnimalInterface
    age :number;//extra property

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;//using extra property

    }

    speak(): void {//bcoz of AnimalInterface
        console.log(`${this.name} always meows.`)
    }

    sleep():void{
        console.log(`${this.name} is sleeping`)
    }



}


const myCat = new Cat('Whiskers',2);
// myCat.speak()
// myCat.sleep()
// console.log(`Name :${myCat.name} Age: ${myCat.age}`);


//______________________________________________________________________________________________________________

//11-9-24

//Utility Types
//Partial

interface Point{
    x:number;
    y:number;

}

let pointPart :Partial<Point>={}//x and y are optional
pointPart.x=10;

//Required
interface Car2{
    make:string;
    model:string;
    milage?:number;
}

let myCar2:Required<Car2>={
    make:"Ford",
    model:"Focus",
    milage:1200
}
//Record key value
const nameAgeMap:Record<string,number>={
    "Alice":21,
    "Bob":25
}


//keyof - extract the key type from an object type
type ObjectType = {
    name:string;
    age:number;
}

type ObjectKeys = keyof ObjectType//"name" | "age"


function getValue<T,K extends keyof T>(obj:T,key:K):T[K]{
    return obj[key]
}

const person3 = {
    name:"John",age:30
}

const name1 = getValue(person3,"name")//"John"
const age1 = getValue(person3,"age")//30


//______________________________________________________________________________________________________________

//12-9-24

/*
TS
Deal with null and undefined
Definitely Typed
TS updates and new version

Angular
http Client,inject
State management
routes
*/

//______________________________________________________________________________________________________________

//18-9-24


class Stack<T>{
    private items :T[]=[];

    push(item:T):void{
        this.items.push(item)
    }

    pop():T|undefined{
        return this.items.pop()

    }

    size():number{

        return this.items.length
    }
}


const numberStack1 = new Stack<number>()

console.log(numberStack1,"1")
numberStack1.push(1)
numberStack1.push(2)
console.log(numberStack1.pop())//2
console.log(numberStack1.size(),"number length")

const stringStack = new Stack<string>()

stringStack.push("helo")

stringStack.push("word")
console.log(stringStack.pop(),"pop string")


//Union

function processValue(value:number | string):number{
    if(typeof value === 'string') return value.length
    return value
}

console.log(processValue(123))//123
console.log(processValue("PCS_GLOBAL"),"string length")



//Intersection & Type


interface HasEmail{
    email:string
}

interface HasPhone{
    phone:string
}

type Contact = HasEmail & HasPhone

function showContact(contact:Contact):string{
    return `Email of the User is ${contact.email} and Phone NUmber ${contact.phone}`
}

const contact:Contact={
    email:"mars@gmail.com",
    phone:"1234567890"
}

console.log(showContact(contact),"Contact Info")


//Recursive

type NestedArray<T> = T | NestedArray<T>[];

function flatten(arr:NestedArray<number>):number[]{
    return Array.isArray(arr) 
                  ?
           arr.reduce<number[]>((acc,cv)=>acc.concat(flatten(cv)),[])
                  :
                [arr]
}

const nestedArray:NestedArray<number> = [1, [2, 3], [[4]], [5, [6]]]

console.log(flatten(nestedArray),"nestedResult")








