//Team shiny_cornflake
//Tiffany Moi and Kelly Wang
//SoftDev1 pd7
//HW15 -- Sequential Progression
//2017-12-07

//====FIBONACCI====
var fibonacci = function (n){
    if (n == 0)
	return 0;
    if (n == 1 || n == 2)
	return 1;
    else
	return fibonacci(n-1) + fibonacci(n-2);
};

//====TESTS====
console.log(fibonacci(4));
console.log(fibonacci(13));


//====GCD====
var gcd = function (a,b){
    var x = Math.max(a,b);
    var y = Math.min(a,b);
    if (a == 0 || b == 0)
	return x;
    if (x%y == 0)
	return y;
    else
	return gcd(y,x%y); 
};

//====TESTS====
console.log(gcd(78,42));
console.log(gcd(25,625));
console.log(gcd(625,25));
console.log(gcd(49,56));


//====randomStudent====

var students = ["Tiff", "Kelly", "Joyce", "Jen", "Helen", "Eugenio", 'Jason', 'Andy', 'Lena', 'Britney', 'Jared'];

var randomStudent = function (){
    var x = Math.round(Math.random() * (students.length - 1));
    return students[x];
};

//====TESTS====
console.log(randomStudent());

//======================================================

var buttonCallbackA = function(e){
    console.log("\n\nhere comes the fib number... expecting 3");
    console.log(fibonacci(4));
};

var a = document.getElementById("a");
a.addEventListener('click', buttonCallbackA);

var buttonCallbackB = function(e){
    console.log("\n\nhere comes the GCD...expecting 125");
    console.log(gcd(125,625));
    console.log("\n\nit should work the other way around too!");
    console.log(gcd(625,125));
};

var b = document.getElementById("b");
b.addEventListener('click', buttonCallbackB);


var buttonCallbackC = function(e){
    console.log("\n\nhere comes a person...");
    console.log(randomStudent());
};

var c = document.getElementById("c");
c.addEventListener('click', buttonCallbackC);

