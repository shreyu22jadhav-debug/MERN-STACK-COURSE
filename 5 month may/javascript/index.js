//variable 
const name = "hello";
console.log(name);

var city = "pune";
console.log(city);

let mobile = 89362890;
console.log(mobile);
  

//function 
function add(a, b) {
    return a + b;
}
console.log(add(13, 5));


// arrow function
const sub = (a, b) => {
    return a - b;
}
console.log(sub(22, 5));


//Higher-Order Functions
function greet(name) {
  return `Hello ${name}`;
}

function processUser(fn) {
  console.log(fn("revi"));
}
processUser(greet);


//Template Literals
const namee = "ashu";
console.log(`Hii ${namee}`);


//Default Parameters
function greet(name = "shrutika") {
    return `welcome ${name}`;
}
console.log(greet());


//Rest Operator (...)
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3));


//Spread Operator
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2);


//Destructuring
const users = {
    username: "shreya",
    userage: 30
};
const { username, userage } = users;
console.log(username);


//Enhanced Object Literals
const ename = "raj";

const employee = {
    ename,
    greet() {
        console.log("Hello");
    }
};


//Optional Chaining (?.)
const user = {
    address: {
        city: "karad"
    }
};
console.log(user.address?.city);


//Ternary Operator
let number = 7;
let output = number % 2 === 0 ? "Even" : "Odd";
console.log(output);


// closures - nested function
function mainFunction() {
    let person = "shreya"
    function nestedFunction() {
        console.log(person)
    }
    return nestedFunction();
}
console.log(mainFunction());


//callback function
function fetchData(callback) {
  callback("Data received");
}

fetchData(console.log);


//symbol
const id = Symbol("id");
console.log(id);


//map
const map = new Map();
map.set("name", "John");
console.log(map.get("name"));


//set
const set = new Set([1, 2, 2, 3]);
console.log(set);


//Async/Await
async function fetchData() {
  return "Data";
}
fetchData().then(console.log);


//Promises
const promise = new Promise((resolve, reject) => {
  resolve("Success");
});
promise.then(data => console.log(data));


//classes
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hi ${this.name}`);
  }
}
const p1 = new Person("shreya");
p1.greet();


//Modules (import/export)
// import { add } from './math.js';
// console.log(add(2, 5));

// export const add = (a, b) => a + b;


// Object Destructuring
const data =  {
           email : "wer@gmail.com",
      age : 23 
    }
console.log(data, "--- full object")
const {email, age} = data
console.log(age)


// Array Destructuring
const array = ["test1", "test2", "test3"]

const[a] = array
console.log(a);


//curring
function multiply(a) {
  return function (b) {
    return a * b;
  };
}
console.log(multiply(2)(3));


//setTimeout 
setTimeout(()=>{
console.log("24hr")
}, 2000);


//setInterval
let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log("Count:", count);

  if (count === 5) {
    clearInterval(intervalId);
    console.log("Stopped!");
  }
}, 1000);
