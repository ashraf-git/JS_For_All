var date = new Date()
// 0 - Sunday, 1 - Monday, 2 - Tuesday, 3 - Wednesday
var today = date.getDay()
console.log(today)
switch (today){
    case 0:
        console.log('Today is Sunday')
        break
    case 1:
        console.log('Today is Monday')
        break
    case 2:
        console.log('Today is Tuesday')
        break
    case 3:
        console.log('Today is Wednesday')
        break
    case 4:
        console.log('Today is thursday')
        break
    case 5:
        console.log('Today is friday')
        break
    case 6:
        console.log('Today is saturday')
        break
    default: console.log("Not a valid Number")
        
    
}