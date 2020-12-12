// what is string value

// 'this is a string'
// "this is a string"

// var str = 'something'//string literal
// var str2 = String('something')//string constructor
// console.log(str, str2)

// var n = 10
// var str4 = n
// var str5 = n.toString()
// var str6 = n + ' '
// var str7 = String(n) //constructor
// console.log(n, str, str2, str4, str5, str6, str7)
//escape notation
// var str10 = " This \t is a 'string'\n"
// var str11 = 'This is \\a \'string\'\n'
// var str12 = 'This \\is\t a "string"'
// console.log(str10, str11, str12)

// carrige Return \r
// vertical tab \v
// backspace \b
// Form feed \f

// string comparison

// var x = 'abcS'
// var y = 'cdes'
// console.log(x<y)
// console.log('001' == 1)

var a = "Ali Ashraf"
var b = "Khan"
var c = a.concat(' ', b)
console.log(c)
var d = c.substr(11, 3)
console.log(d)

console.log(c.charAt(4))
console.log(c.startsWith('Ali'))
console.log(c.endsWith(' Khan34'))
console.log(c.toUpperCase())
console.log(c.toLowerCase())

console.log('    Bangladesh   '.trim())
console.log(c.split(' '))
