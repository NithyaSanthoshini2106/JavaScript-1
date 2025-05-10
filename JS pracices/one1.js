// Define an object representing a student
const student = {
    name: "Nithya",
    age: 20,
    isEnrolled: true,
    
    // Nested object for address
    address: {
      city: "Nellore",
      zip: "10001"
    },
  
    // Method to greet
    greet() {
      console.log(`Hi, I'm ${this.name} from ${this.address.city}.`);
    },
  
    // Method to update age
    updateAge(newAge) {
      this.age = newAge;
    }
  };
  
  // Accessing properties
  console.log(student.name);             
  console.log(student.address.zip);      
  
  // Calling a method
  student.greet();                      
  // Updating a property
  student.updateAge(21);
  console.log(student.age);             
  
  // Dynamically adding a new property
  student.grade = "A";
  console.log(student.grade);           
  