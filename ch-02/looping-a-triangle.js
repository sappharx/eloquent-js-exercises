var loops = 7;

for (var i = 0; i < loops; ++i) {
	var msg = '';
	
	for (var j = 0; j < i + 1; ++j) {
		msg += '#';
	}
	
	console.log(msg);
}