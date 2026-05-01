//function expression
const abc = function () {
  console.log("Hello World");
};
console.log(abc);

abc();

let a = 4,
  b = 6;
let add = function (a, b) {
  return a + b;
};

console.log(add);
console.log(add());
console.log(add(a, b));

const arrowfun = () => {
  console.log("I Am Arrow Function");
};
arrowfun();


const addarrow = (a, b) =>  a + b;

console.log(addarrow(5, 6));
