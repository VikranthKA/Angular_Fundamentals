console.log("hello")


function greet(name:string,age:Date){
    console.log(`Hello ${name} your age is ${age}`)
}

greet("Name",new Date())

let obj1:any={
    x:1
}
// No error bcoz of any type
obj1.foo()
obj1()


let myName:string = "asdf"

function fnNumber():number{
    return 10
}


async function fetchData():Promise<object>{
    return {
        name:"name"
    }
}