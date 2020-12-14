var arr = [54, 32, 45, 35, 45, 85, 45, 78]
var find = 45
isFound = false
for(var i = 0; i < arr.length; i++){
    if(arr[i]===find){
        console.log('Data found at index ' + i)
        isFound = true
        break
    }
}
if(!isFound){
    console.log('Data Not Found')
}