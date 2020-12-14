var obj = {
    a: 434,
    b: 878,
    c: 349
};
console.log(Object.keys(obj));
console.log(Object.values(obj))
console.log(Object.entries(obj))

// var obj2 = obj
// obj2.a = 4354
// obj2.b = 87878
// console.log(obj)
// console.log(obj2)

var obj2 = Object.assign({}, obj);
obj2.a = 4
console.log(obj)
console.log(obj2)