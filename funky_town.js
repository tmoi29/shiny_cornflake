//Team shiny_cornflake
//Tiffany Moi and Kelly Wang
//SoftDev1 pd7
//HW15 -- Sequential Progression
//2017-12-07

var fibonacci = function (n){
    if (n == 0)
	return 0;
    if (n == 1 || n == 2)
	return 1;
    else
	return fibonacci(n-1) + fibonacci(n-2);
};

console.log(fibonacci(4));

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

console.log(gcd(78,42));

var students = ["Tiff", "Kelly", "Joyce", "Jen", "Helen", "Eugenio"];

var randomStudent = function (){
    var x = Math.round(Math.random() * students.length) - 1;
    return students[x];
};

console.log(randomStudent());
