var main = function(){
	$('.js-btn').click(function(){	
		var adBook = [];
		var name = prompt("enter name");
		var age = prompt("enter age");
		adBook[0] = new Person(name,age);
		name = prompt("enter name");
		age = prompt("enter age");
		adBook[1] = new Person(name,age);
		alert(CalcAgeDif(adBook[0],adBook[1]));
	});
	$('#prob1').click(function(){
		var sum = 0;
		for(x=0; x < 1000; x++){
			if(x % 3 === 0 || x % 5 === 0){
				sum+= x;
			}
		}
		$('#row1').append('<div class=\'col-md-2\'><h4>' + sum + '</h4></div>');
	});

	$('#prob2').click(function(){
		var sum = 0;
		var previous = 1;
		var current = 1;
		var next = 0;

		while(sum < 4000000){
			if(next%2 === 0){
				sum+= next;
			}
			next = previous + current;
			previous = current;
			current = next;
		}
		$('#row2').append('<div class=\'col-md-2\'><h4>' + sum + '</h4></div>');
	});

	$('#prob3').click(function(){
		var maxPrime = 0;
		var check;
		for(x = 2; x < 1000; x++){
			check = isPrime(x);
			if(check === true){
				maxPrime = x;
			}
		}
		$('#row3').append('<div class=\'col-md-2\'><h4>' + maxPrime + '</h4></div>');
	});
};

function isPrime(num){
	var prime = true;
	for(y = 2; y < num; y++){
		if(y !== num && num%y === 0){
			prime = false;
		}
	}
	return prime;
}

// Person class constructor. Class is a type, or category of objects. Therefore,
// each Person is an instance of the Person class.

function Person(name,age){
	this.Name = name;
	this.age = age;
}

// Calculates difference in ages of two people in absolute value. Takes two objects with 
// age property

var CalcAgeDif = function(dude1,dude2){
	return Math.abs(dude1.age - dude2.age);
}

// Rectangle class constructor with two built-in functions. Remeber to use () when calling the
// functions.

function Rectangle(len,wid){
	this.length = len;
	this.width = wid;
	this.area = function(){
		return this.length * this.width;
	}
	this.perimeter = function(){
		return this.height * 2 + this.width * 2;
	}
}

var div3 = function(number){
	return number / 3;
};

$(document).ready(main);