var addition = function add(a, b){
    return a + b
}
addition(23, 43)

setTimeout(function (){
    console.log('I will call after 5 seconds')
}, 5000)

var result = addition

console.log(result(5, 5))