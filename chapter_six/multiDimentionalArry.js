var arr = [
    [45, 65, 78, 65, 78],
    [45, 45, 78, 55, 78],
    [85, 65, 48, 65, 68]
];
// console.log(arr[0][0]);
// console.log(arr[1][2]);

for(var i=0; i<arr.length; i++){
    for(var j=0; j<arr[i].length; j++){
        console.log('Element '+ i + ':' + arr[i][j])
    }
}