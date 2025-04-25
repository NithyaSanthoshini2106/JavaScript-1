
const person = {
    name: "Nithya",
    age: 28,
    isStudent: false,
    
    greet: function() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
  console.log(person.name);      
  console.log(person["age"]); 
  person.greet();                
  person.age = 29;
  person.city = "New York";
  delete person.isStudent;
  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  