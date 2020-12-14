// Travarse in javascript

var arr = [2, 54, 554, 54, 879, 556, 47, 54, 57];

// arr[0] 
// arr[1]
// // arr[2]

// arr[arr.length-1]
// for(var i=0; i<arr.length; i++){
//     // console.log(arr[i]);
//     arr[i] = arr[i] + 2
// }
// console.log(arr[i])

// var sum = 0;
// for(var i=0; i<arr.length; i++){
//     sum += arr[i]
// }
// console.log(sum)

// for (var i=0; i<arr.length; i++){
//     if(arr[i]%2 === 0){
//         console.log(arr[i])
//     }
// }
var oddSum = 0;
for(var i=0; i<arr.length; i++){
    if(arr[i]%2 ===1){
        oddSum += arr[i]
      
    }
}
console.log(oddSum) 

var evenSum = 0;
for(var i=0; i<arr.length; i++){
    if(arr[i]% 2 === 0){
        evenSum += arr[i]
    }
}
console.log(evenSum)
console.log(evenSum + oddSum)