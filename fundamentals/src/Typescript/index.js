// console.log("hello")
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// function greet(name:string,age:Date){
//     console.log(`Hello ${name} your age is ${age}`)
// }
// greet("Name",new Date())
var obj1 = {
    x: 1
};
// No error bcoz of any type
// obj1.foo()
// obj1()
var myName = "asdf";
function fnNumber() {
    return 10;
}
function fetchData() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, {
                    name: "name"
                }];
        });
    });
}
var age = 30;
var username = "John";
function greetUser(name) {
    return "Hello ".concat(name);
}
var numbers = [1, 2, 3, 4];
var persons = ["John", 80];
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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.speak = function () {
        console.log("".concat(this.name, " make animal noise"));
    };
    return Animal;
}());
var dog = new Animal("Dog");
dog.speak();
//Genrics
function identity(args) {
    return args;
}
console.log(identity(333));
//Union Types
function prindId(id) {
    console.log("ID:".concat(id));
}
prindId(2680);
prindId("PCSGLOBAL");
//Tuple
var ourTuple = [9, false, "string"];
// ourTuple = [false,"coding",1]
// Object
var car = {
    type: "A",
    model: "B",
    year: 2
};
//we can solve above by using the interface
var car2 = {
    type: "A",
};
//Enum : Is a special class that represents a group of constants 
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 1] = "North";
    CardinalDirections[CardinalDirections["East"] = 2] = "East";
    CardinalDirections[CardinalDirections["South"] = 3] = "South";
    CardinalDirections[CardinalDirections["West"] = 4] = "West";
})(CardinalDirections || (CardinalDirections = {}));
console.log(CardinalDirections.North);
console.log(CardinalDirections.West);
//9-9-24
//function
function addNumber(a, b) {
    if (a === void 0) { a = 10; }
    if (b === void 0) { b = a; }
    // console.log(a*b) 
}
//Rest Parameters
function add(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    console.log(a, b, rest);
    return rest.reduce(function (cv, acc) { return cv + acc; }, 0);
}
console.log(add(10, 10, 10, 10));
//Special Type
var value1 = true;
value1 = "string";
// console.log(value1)//no error
var value2 = 1;
value2 = 3;
// console.log(typeof value2,"type")
var value3;
var value4;
var value5;
//Casting is the Type of overriding the a type:explictly
//as
var someValue = "string";
var strLength = someValue.length;
//angle-brackets <> not for JSX
var strLength2 = someValue.length;
//Classes
// public-(default) allows access to the class member from anywhere
//private - only allows access to the class member from within the class
//protected - allows access  to the class member  from itself  and any classes that inherit it
var Person = /** @class */ (function () {
    function Person(name, age, date) {
        this.date = 0;
        this.name = name;
        this.age = age;
        if (date !== undefined) {
            this.date = date;
        }
    }
    Person.prototype.getDate = function () {
        return this.date;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var User1 = /** @class */ (function (_super) {
    __extends(User1, _super);
    function User1(name, age, date, isAlive) {
        var _this = _super.call(this, name, age, date) || this;
        _this.isAlive = true;
        _this.isAlive = isAlive;
        return _this;
    }
    User1.prototype.checkIsAlive = function () {
        console.log("The User ".concat(this.getName(), " of date ").concat(this.getDate(), " is alive ").concat(this.isAlive));
    };
    return User1;
}(Person));
var person = new Person("John", 25, 2024);
console.log(person.getName());
// console.log(person.name)//Error becoz of private
var user = new User1("Jane", 30, 2024, true);
user.checkIsAlive();
