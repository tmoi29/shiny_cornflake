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
