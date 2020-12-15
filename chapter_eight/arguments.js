// function add(a, b) {
//     var result = a + b
//     console.log(result)
// }
// add(10, 20)
// add(3432, 4323)

// function sub(a, b) {
//     var result = a - b
//     console.log(result)
// }
// sub(29, 3)
// sub(74, 43)

var arr1 = [1, 2, 3, 4, 5]
var arr2 = [4, 5, 6, 4]
var arr3 = [7, 8, 9, 10]

// var sum = 0
// for(var i = 0; i < arr1.length; i++){
//     sum+= arr1[i]
// }
// console.log(sum)

// var sum2 = 0
// for(var i = 0; i < arr2.length; i++){
//     sum2+= arr2[i]
// }
// console.log(sum2)

// var sum3 = 0
// for(var i = 0; i < arr3.length; i++){
//     sum3+= arr3[i]
// }
// console.log(sum3)

function sumOfArray(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum+=arr[i]
    }
    console.log(sum)
}
sumOfArray(arr1)
sumOfArray(arr2)
sumOfArray(arr3)