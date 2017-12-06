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
console.log(fibonacci(7));

var gcd = function( a , b ){
    while ( b != 0 ) { 
	t = b;
	b = a % b; 
	a = t;
    };
    return a;
};

console.log(gcd(25,625));
console.log(gcd(625,25));
console.log(gcd(49,56));

var list = [ 'Kelly', 'Tiffany', 'Jason', 'Andy', 'Lena', 'Britney', 'Jared' ];
