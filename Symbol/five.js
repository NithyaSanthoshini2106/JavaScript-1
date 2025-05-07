let eid = Symbol('uid')

let emp = {
    'eid' : 101,
    [eid]:5001


}
console.log("Employee Id " , emp.eid)

console.log("user Id", emp[eid])

for(property in emp){
    console.log(property)
}