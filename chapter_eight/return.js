function addAll(){
    var sum = 0;
    for(var i=0; i<arguments.length; i++){
        sum+=arguments[i]
    }
    return sum
}
var result = addAll(1, 2, 3, 4)
console.log(result)

function person(name, email){
    return{
        name: name,
        email: email
    }
    // console.log('something')
}
var p1 = person('aliahsraf', 'aliashraf.hena@gmail.com')
console.log(p1)