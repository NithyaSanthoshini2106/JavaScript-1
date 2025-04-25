const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2021
  };
  console.log(car.brand);     // "Toyota"
  console.log(car["model"]);  // "Corolla"
  car.color = "blue";
  console.log(car.color);  // "blue"
  car.year = 2023;
  console.log(car.year);  // 2023
  delete car.model;
  console.log(car.model);  // undefined
  const user = {
    name: "Sam",
    sayHello: function() {
      console.log("Hi, I'm " + this.name);
    }
  };
  
  user.sayHello();  // "Hi, I'm Sam"
  for (let key in car) {
    console.log(key + ": " + car[key]);
  }
  const company = {
    name: "TechCorp",
    address: {
      street: "123 Main St",
      city: "Metropolis"
    }
  };
  
  console.log(company.address.city);  // "Metropolis"
  const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 }
  ];
  
  console.log(people[1].name);  // "Bob"
  
    