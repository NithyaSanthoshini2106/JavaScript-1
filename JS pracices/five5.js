// Primitive Data Types
let myName = "Nithya Adluru";            
let myAge = 20;                  
let isStudent = true;            
let address;                     
let phoneNumber = null;          
let bigValue = 1234567890123n;   
let uniqueKey = Symbol("key");   

console.log("Name:", myName);
console.log("Age:", myAge);
console.log("Student:", isStudent);
console.log("Address:", address);
console.log("Phone Number:", phoneNumber);
console.log("Big Value:", bigValue);
console.log("Unique Key:", uniqueKey);

// Non-Primitive Data Types
let person = {                   
  name: "Bob",
  age: 25
};

let fruits = ["apple", "banana", "mango"];  

function greet() {               
  console.log("Hello, World!");
}

console.log("Person:", person);
console.log("Fruits:", fruits);
greet();                         