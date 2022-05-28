var mariePrice = 35;
var thinPrice = 40;
var totalPrice = (mariePrice + thinPrice)
var Difference = (mariePrice - thinPrice)
var Multiply = (mariePrice * thinPrice)
var Divide = (mariePrice / thinPrice)

//console.log(totalPrice)
//console.log(Difference)
//console.log(Multiply)
//console.log(Divide)

// advanced   
// First one
var newMariePrice1 = mariePrice + 10 ;
//  two
var newMariePrice2 = 35 + 10 ;

 //এখানে mariePrice এর দাম 10 টাকা বেড়ে 45 হয়েছে । কিন্তু আমরা একে নতুন var নিয়ে লিখেছি  এটা উচিত নয় এটা এই ভাবে লেখা উচিত -

 mariePrice = mariePrice + 10
 mariePrice += 40; 
 mariePrice -= 5;
 console.log(mariePrice)

//console.log(newMariePrice1)
//console.log(newMariePrice2)

var myAge = 23;
myAge = myAge * 2;
myAge++;
myAge *= 2
// যখন only ১ বাড়ানোর দরকার হয় 
myAge++;
// যখন only ১ কমানোর  দরকার হয়
myAge--;
console.log(myAge)