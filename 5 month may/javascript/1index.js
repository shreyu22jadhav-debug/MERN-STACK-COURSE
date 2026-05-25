// ==============================
// 1. let & const
// ==============================
let name = "shreya";
const name1 = "raj";
console.log(name);
console.log(name1);

// ==============================
// 2. Arrow Functions
// ==============================
const add = (a, b) => a + b;
console.log("add");

// ==============================
// 3. Template Literals
// ==============================
const greeting = `Hello, ${name}!`;
console.log(`my name is ${name}`);

// ==============================
// 4. Default Parameters
// ==============================
function multiply(a, b = 2) {
  return a * b;
}
console.log(multiply(30,40))

// ==============================
// 5. Destructuring
// ==============================
const user = { id: 1, username: "admin" };
const { id, username } = user;

console.log(id);
console.log(username);

// ==============================
// 6. Spread Operator
// ==============================
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2)

// ==============================
// 7. Rest Operator
// ==============================
function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(10,20,30,40,50))

// ==============================
// 8. Enhanced Object Literals
// ==============================
const age = 19;
const person = {
  name,
  age,
  greet() {
    console.log("Hi!");
  },
};

// ==============================
// 9. Classes
// ==============================
class Car {

  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  displayInfo() {
    console.log(`This is a ${this.year} ${this.brand}.`);
  }
}

const myCar = new Car("Toyota", 2024);
myCar.displayInfo(); 

// ==============================
// 10. Promises
// ==============================
const MyPromise = new Promise((resolve,reject) =>{
    let success = true;
    if(success){
        console.log("resolved")
    }
    else{
        console.log("reject")
    }
});
    

// ==============================
// 11. Async / Await
// ==============================
async function getData() {
  const data = await fetchData();
  console.log(data);
}

// ==============================
// 12. Map
// ==============================
const arr = [1, 2, 3, 4];
const double = arr.map((num)=> num*2)
console.log(double);

// ==============================
// 13. Set
// ==============================
const set = new Set([1, 2, 2, 3]);
console.log(set)

// ==============================
// 14. for...of Loop
// ==============================
const message = "Hello";

for (const char of message) {
  console.log(char);
}

// ==============================
// 15. Symbol
// ==============================
const sym = Symbol("id");
console.log(sym)

// ==============================
// 16. BigInt
// ==============================
const bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber);

// ==============================
// 17. Array Methods (ES6+)
// ==============================
const number = [1, 2, 3, 4];
const filtered = number.filter(n => n > 2);
console.log(number);