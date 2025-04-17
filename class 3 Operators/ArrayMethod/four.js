let numbers=[1,2,3,4,5,6,7]

let evens=[]
for(let num of numbers){
    if(num%2==0){
        evens.push(num)
    }
}
console.log(numbers)
console.log(evens)