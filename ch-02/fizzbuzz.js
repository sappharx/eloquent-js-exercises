function isMultipleOf(num) {
	return function (val) {
		return val % num == 0;
	}
}

var isMultipleOf3 = isMultipleOf(3);
var isMultipleOf5 = isMultipleOf(5);
var isMultipleOf15 = isMultipleOf(15);

for (var i = 0; i < 101; ++i) {
	var msg = i.toString();
	
	if (isMultipleOf15(i))
		msg = 'FizzBuzz';
	else if (isMultipleOf5(i))
		msg = 'Buzz';
	else if (isMultipleOf3(i))
		msg = 'Fizz';
	
	console.log(msg);
}