function isEven(num) {
	if (num == 0)
		return true;
	else if (num == 1)
		return false;
		
	return isEven(num - 2);
}

var checks = [50, 75, -1];

checks.forEach(n => {
	var msg = String(n);
	n = Math.abs(n);
	
	if (isEven(n))
		msg += ' is even';
	else
		msg += ' is odd';
	
	console.log(msg);
});
/*
for (var n in checks) {
	var msg = String(n);
	
	if (isEven(n))
		msg += ' is even';
	else
		msg += ' is odd';
	
	console.log(msg);
} */