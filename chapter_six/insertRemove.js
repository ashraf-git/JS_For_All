// Insert and Remove Elements
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Insert 10 to index 3
// arr[3] = 10
// arr.push(10)
// arr.unshift(10)
// arr.splice(3, 0, 23, 45)
// arr[3] = undefined
// arr.pop()
// arr.shift()
arr.splice(3, 1)
arr.splice(3, 1, 44)
console.log(arr)