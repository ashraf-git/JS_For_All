// what is Pure Function?

// It returns the same result if given the same arguments
// it doesn't cause any observable side effect

function sqr(n){
    return n*n
}
console.log(sqr(3))
console.log(sqr(3))
console.log(sqr(3))
var n = 30

function change() {
     n = 289
}
change()
console.log(n)

var point = {
    x: 20,
    y: 30
}

function printPiont(point) {
    point.x = 100
    point.y = 200
    console.log(point)
}
printPiont(point)
console.log(point)

