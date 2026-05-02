var a = 10;
console.log(a);
console.log(b);
var b = 20;
console.log(a);
console.log(b);

let test="this is global text variable";

function classA(){
console.log("ClassA",test);
}
function classB(){
    console.log("ClassB",test);
}
function classC(){
    let test2="this is local variable"
    console.log("ClassC",test);
    console.log("ClassC",test2);
}
function classD(){
    console.log("ClassD",test);
}
function classE(){
    console.log("ClassE",test);
}
function classF(){
    console.log("ClassF",test);
}
function classG(){
    console.log("ClassG",test);
}

classA()
classB()
classC()
classD()
classE()
classF()
classG()