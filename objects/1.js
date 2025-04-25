const person = {
    name: "Alex",
    age: 30,
    isStudent: false,
    greet: function() {
      console.log("Hello!");
    }
  };
  console.log(person.name);       // Alex
  console.log(person["age"]);     // 30
  person.greet();                 // Hello!
    