// // for loops
// for(var i = 0; i < 500; i+=100) {
//     console.log(i + 1 + ' Ali ashraf')
// }

// for (var i = 1; i <= 100; i++){
//     console.log(i)
// }
// for(var i = 1; i <= 100; i+= 2){
//     console.log(i)
// }

// for(var i = 1; i <= 100; i++){
//     if(i%2 === 0){
//         console.log(i)
//     }
// }

// var sum = 0;
// for(var i = 1; i <=10; i++){
//     console.log(sum + '+' + i +'='+ (sum + 1))
//     sum += i
// }

var sum = 0;
for(var i =1; i <=10; i++){
    console.log(sum + '+' + i + '=' + (sum + i))
    sum += i
}
console.log('result = ' + sum)