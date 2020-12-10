// && || !

// A && B

// true && true // true
// true && false // false
// false && true // false
// false && false // false

// true || true // true
// true || false // true
// false || true // true
// false || false // false

var a = 80;
var b = 50;
var c = 50;
var d = 60;

if(a > b && c > d) {
    console.log("A is greater B and C is greater D")
}else{
    console.log("At least one condition is false")
}

if(a > b || c > d) {
    console.log("A is greater B or C is greater D")
}else{
    console.log("Two condition is false")
}

var check = !!(a > b)
console.log(check)