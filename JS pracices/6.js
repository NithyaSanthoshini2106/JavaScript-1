let name = "NithuBunnu";         
let age = 20;             
let isStudent = true;     
let hobbies = ["reading", "football"];
let user = {
  name: name,
  age: age,
  isStudent: isStudent,
  hobbies: hobbies
};
console.log("Name: " + user.name);
console.log("Age: " + user.age);
console.log("Student: " + (user.isStudent ? "Yes" : "No"));
console.log("Hobbies: " + user.hobbies.join(", "));
