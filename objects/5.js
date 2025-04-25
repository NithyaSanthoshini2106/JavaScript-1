
const student = {
    name: "Ava",
    age: 20,
    course: "Computer Science",
    
    introduce: function() {
      console.log(`Hi, I'm ${this.name}, studying ${this.course}.`);
    }
  };
  

  console.log(student.name);         
  console.log(student["age"]);        
  
  
  student.introduce();                
  student.age = 21;
  
  student.grade = "A";
  
  delete student.course;
  
  for (let key in student) {
    console.log(`${key}: ${student[key]}`);
  }
  