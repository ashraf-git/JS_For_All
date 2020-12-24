function greet(msg) {
    function greetings(name) {
        return msg + ' ' + name
    }
    return greetings
}
var gm = greet('Good Morning')
// console.log(typeof gm)
var gn = greet('Good Night')
var hello = greet('Helloe')

var msg = gm('ali ashraf')
console.log(msg)
console.log(gn('Ali ahsraf'))
console.log(hello("Cats"))