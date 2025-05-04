class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hi, I'm ${this.name}`);
    }
  }
  
  let p = new Person("Nithya", 30);
  p.greet(); 
  // Hi, I'm Nithya
  