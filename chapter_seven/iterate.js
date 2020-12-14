var obj = {
    a: 34,
    b: 63,
    c: 98
}
// console.log('a' in obj)
// console.log('k' in obj)
for(var i in obj) {
    console.log(i)
    console.log(i + ':' + obj[i])
}