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
};


// Person constructor

function Person(name,age){
	this.Name = name;
	this.age = age;
}

// Calculates difference in ages of two people in absolute value. Takes two objects with 
// age property

var CalcAgeDif = function(dude1,dude2){
	return Math.abs(dude1.age - dude2.age);
}

// Rectangle constructor with two built-in functions. Remeber to use () when calling the
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