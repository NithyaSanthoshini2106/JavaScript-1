// Define an object
const user = {
    firstName: "Nithya",
    lastName: "Buddy",
    age: 30,
    isAdmin: true,
  
    // Method to display full name
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  
    // Method to check if user is an adult
    isAdult() {
      return this.age >= 18;
    }
  };
  
  // Accessing properties
  console.log("First Name:", user.firstName);  
  console.log("Is Admin:", user.isAdmin);      
  
  // Calling methods
  console.log("Full Name:", user.getFullName()); 
  console.log("Is Adult:", user.isAdult());      
  
  // Updating a property
  user.age = 17;
  console.log("Updated Age:", user.age);        
  console.log("Is Adult Now?", user.isAdult());  
  