
let user = {
    name: "Kirankumarrajunithuraju",             
    age: 26,                             
    isStudent: true,                     
    hobbies: ["coding", "music", "yoga"],
    address: {                           
      city: "Kadapa",
      zip: 60601
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
  