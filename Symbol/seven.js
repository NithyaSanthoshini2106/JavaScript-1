let eid1 = Symbol('uid')

let eid2 = Symbol('uid')

let emp = {
    'eid1' : 101,
    'eid2' : 201,
    [eid1]:5001,
    [eid2]:6001


}
console.log("Employee Id " , emp.eid1)

console.log("user Id", emp.eid2)

for(property in emp){
    console.log(property)
}