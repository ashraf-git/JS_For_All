// Object in javascript
// student 1:
// Bangla : 34
// English : 56
// Math : 76

// [34, 55, 56]

// var obj = {}
// obj.x = 10
// console.log(obj)

// var point = {// Object literal
//     x: 10,
//     y: 20
// }
// point.y = 30
// point.z = 30
// console.log(point)

// var obj = Object()//object constructor
// obj.a = 10
// var obj2 = new Object()//object constructor
// obj2.b = 39
// console.log(obj)
// console.log(obj2)

var point = {// Object literal
        x: 10,
        y: 20,
        z: 30
}
// console.log(point.x)
// console.log(point.y)
// console.log(point.x + point.z)
// console.log(point['x'])//array notation
// console.log(point['z'])

// var show = "z"
// console.log(point[show])
point.x =35;// dot notation
point.a = 45;
console.log(point)
console.log(point.m)
point['y'] = 80//array notation
var prop = 'z'
point[prop] = 22;
console.log(point)

point.a = undefined
console.log(point)
delete point.a
console.log(point)