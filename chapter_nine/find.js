var arr = [2, 54, 554, 54,7, 434, 6, 534,445]
// var result = arr.find(function(value){
//     return value === 2
// })
// console.log(result)

// var result = arr.findIndex(function(value){
//     return value === 7
// })
// console.log(result)

function myFind(arr, cb){
    for(var i = 0; i < arr.length; i++){
        if(cb(arr[i])){
            return arr[i]
            // return i    
        }
    }
}
var result2 = myFind(arr, function(value){
    return value === 7
})
console.log(result2)