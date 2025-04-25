const person = {
    name: "Alice",
    age: 25,
    greet: function() {
      console.log("Hello!");
    }
  };
  console.log(person.name);     // "Alice"
  console.log(person["age"]);  // 25
  person.age = 26;
  person["name"] = "Bob";
  person.city = "New York";
  delete person.age;
      