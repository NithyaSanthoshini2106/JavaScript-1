
const person = {
  firstName: "Nithya",
  lastName: "Buddy",
  age: 30,
  greet: function() {
    console.log("Hello, my name is " + this.firstName + " " + this.lastName);
  }
};

console.log(person.firstName); 
console.log(person["lastName"]); 


person.greet(); 
