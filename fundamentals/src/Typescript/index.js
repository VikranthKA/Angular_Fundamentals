console.log("hello");
function greet(name, age) {
    console.log("Hello ".concat(name, " your age is ").concat(age));
}
greet("Name", new Date());
var obj1 = {
    x: 1
};
// No error bcoz of any type
obj1.foo();
obj1();
var myName = "asdf";
