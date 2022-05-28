
// which is what (what => means number, string, boolean,null, undefined, object, array, function)  that is check by => typeof;

var tShirtPrice1 = 200 ;
console.log(typeof tShirtPrice1)

var tShirtPrice2 = '200' ;
console.log(typeof tShirtPrice2)

var isRaining = true;
console.log(typeof isRaining);


//আবার যদি কখনো floatNumber বা দসমিক সংখা থাকে এবং তাদের add করতে বলা হয় এবং অনেক fraction থাকে তখন toFixed  use  করা  হয় ফলে  আবার তখন number string এ পরিণত হয় 

var price = 2.5622
var price2 = 25.28
var total = price + price2
//1.
console.log(parseFloat((price+ price2).toFixed(1)));
//2.
console.log(parseFloat(total.toFixed(5)))