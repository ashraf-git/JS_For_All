function add(a, b, c){
    return a + b + c;
}
var result1 = add(3, 5, 5)
console.log(result1)

function currying(a){
    return function (b){
        return function (c){
            return a + b + c
        }
    }
}

var result =currying(3)(4)(5)
console.log(result)