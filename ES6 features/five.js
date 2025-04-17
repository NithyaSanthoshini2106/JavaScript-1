let emp={ 
    eid:101,
    ename:"nithya",
    esal:56900,
    email:"nithya12@gmail.com"

}
let details={
    email:"nithya12@gmail.com",
    loc:"Wayanad"
}

let emp_Details={...emp,...details}

console.log(emp_Details)



