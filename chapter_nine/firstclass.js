// First Class Function
    function add(a, b) {
        return a + b;
    }
// 1. A Function can be stored in a variable
var sum = add
console.log(sum(2, 5))
console.log(typeof sum)
// 2. A function can be stored in a Array
var arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](3, 5))
// 3. A function can be stored in a Object
var obj = {
    sum: add
}
console.log(obj)
console.log(obj.sum(2, 8))
// 4. We can create function as needed
setTimeout(function() {
    console.log('I have created...')
}, 1000)

// 5. We can pass a function as a arguments
// 6. We can return function from another function

