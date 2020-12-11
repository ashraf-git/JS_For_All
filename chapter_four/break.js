while(true){
    var rend = Math.floor(Math.random() *10 + 1);
    if(rend === 9){
        console.log('you are wining 9')
        break
    }else{
        console.log(' this is ' + rend)
    }
}

for(var i = 1; i < 10; i++){
    if(i%5 === 0){
        break
    }else{
        console.log(i)
    }
}