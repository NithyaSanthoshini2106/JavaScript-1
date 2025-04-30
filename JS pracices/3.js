// Primitive Data Types
let name = "";             // String
let age = 25;                  // Number
let isStudent = true;          // Boolean
let grade;                     // Undefined
let empty = null;              // Null
let bigNumber = 1234567890123456789012345n; // BigInt
let uniqueID = Symbol("id");   // Symbol

// Non-Primitive Data Types
let person = {                 // Object
  firstName: "Alice",
  lastName: "Smith"
};

let numbers = [1, 2, 3, 4];    // Array (object type)
let greet = function() {       // Function (also an object)
  return "Hello!";
};

// Output all values and their types
console.log("name:", name, "| Type:", typeof name);
console.log("age:", age, "| Type:", typeof age);
console.log("isStudent:", isStudent, "| Type:", typeof isStudent);
console.log("grade:", grade, "| Type:", typeof grade);
console.log("empty:", empty, "| Type:", typeof empty);  // Quirk: shows "object"
console.log("bigNumber:", bigNumber, "| Type:", typeof bigNumber);
console.log("uniqueID:", uniqueID, "| Type:", typeof uniqueID);

console.log("person:", person, "| Type:", typeof person);
console.log("numbers:", numbers, "| Type:", typeof numbers);
console.log("greet:", greet(), "| Type:", typeof greet);
