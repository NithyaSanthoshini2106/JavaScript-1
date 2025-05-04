// 1. String
let name = "Alice";

// 2. Number
let age = 30;

// 3. Boolean
let isStudent = false;

// 4. Undefined
let middleName;

// 5. Null
let nickname = null;

// 6. Object
let person = {
  name: name,
  age: age,
  isStudent: isStudent
};

// 7. Array
let hobbies = ["reading", "gaming", "coding"];

// 8. Function
function greet(user) {
  return `Hello, ${user}!`;
}

// 9. Symbol
let id = Symbol("userID");

// 10. BigInt
let bigNumber = 1234567890123456789012345678901234567890n;

// Displaying everything
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Middle Name:", middleName); // undefined
console.log("Nickname:", nickname);      // null
console.log("Person Object:", person);
console.log("Hobbies:", hobbies);
console.log(greet(name));
console.log("Symbol ID:", id.toString());
console.log("BigInt:", bigNumber);
