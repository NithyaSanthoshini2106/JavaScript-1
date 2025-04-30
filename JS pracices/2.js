// Primitive Data Types
let stringData = "Hello, World";          // String
let numberData = 42;                      // Number
let booleanData = true;                   // Boolean
let undefinedData;                        // Undefined
let nullData = null;                      // Null (special case: typeof null returns "object")
let symbolData = Symbol("id");            // Symbol
let bigintData = 12345678901234567890n;   // BigInt

// Non-Primitive Data Types (Objects)
let objectData = { name: "Alice", age: 30 }; // Object
let arrayData = [1, 2, 3, 4, 5];             // Array
let functionData = function() { return "Hi"; }; // Function

// Print each value and its type
console.log("stringData:", stringData, "| Type:", typeof stringData);
console.log("numberData:", numberData, "| Type:", typeof numberData);
console.log("booleanData:", booleanData, "| Type:", typeof booleanData);
console.log("undefinedData:", undefinedData, "| Type:", typeof undefinedData);
console.log("nullData:", nullData, "| Type:", typeof nullData);  // Known quirk: "object"
console.log("symbolData:", symbolData, "| Type:", typeof symbolData);
console.log("bigintData:", bigintData, "| Type:", typeof bigintData);
console.log("objectData:", objectData, "| Type:", typeof objectData);
console.log("arrayData:", arrayData, "| Type:", typeof arrayData); // Also returns "object"
console.log("functionData:", functionData, "| Type:", typeof functionData);
