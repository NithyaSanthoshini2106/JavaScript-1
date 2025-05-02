
let user = {
    name: "Nithya Raju",                
    age: 28,                         
    isStudent: false,               
    hobbies: ["reading", "gaming"], 
    address: {                     
      city:"Gudur",
      zip: 10001
    }
  };
  function displayUserProfile(profile) {
    console.log("=== USER PROFILE ===");
    console.log("Name:", profile.name);
    console.log("Age:", profile.age);
    console.log("Student:", profile.isStudent ? "Yes" : "No");
    console.log("Hobbies:", profile.hobbies.join(", "));
    console.log("City:", profile.address.city);
    console.log("ZIP Code:", profile.address.zip);
  }
  displayUserProfile(user);
  