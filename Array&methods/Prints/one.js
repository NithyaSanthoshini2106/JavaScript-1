let emp={
    'id':101,
    'name':'Nithya',
    'sal':'456789'
}

let emp_str='{"id":101,"name":"Nithya","sal":450000}'

console.log(JSON.stringify(emp))

console.log(JSON.parse(emp_str))