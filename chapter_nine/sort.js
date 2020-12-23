
var persons = [
    {
     name: 'zamal',
     age: 36
    },
    {
        name: 'Rana',
        age: 35
    },
    {
        name: 'Sabuj',
        age: 98
    },
    {
        name: 'Wahid',
        age: 39
    }
]
arr = [2, 5,  6, 4, 47, 8, 7,  4, 8, 21, 8, 9, 10, -6];
// arr.sort()

// persons.sort()
// console.log(persons)

arr.sort(function(a, b) {
    if(a>b){
        return 1
    } else if (a<b){
        return -1    
    }else{
        return 0
    }
})
console.log(arr)

persons.sort(function(a, b) {
    if(a.age > b.age){
        return 1
    } else if(a.age < b.age){
        return -1
    } else{
        return 0
    }
})
console.log(persons)

var res1 = arr.every(function(value) {
    return value === 0
})
console.log(res1)

var res2 = arr.every(function(value) {
    return value  >= 0 
})
console.log(res2)

var res3 = arr.some(function(value) {
    return value% 2 === 1 
})
console.log(res3)
var res4 = arr.some(function(value){
    return value >= 0
})
console.log(res4)