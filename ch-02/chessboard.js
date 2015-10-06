function isEven (num) {
	return num % 2 == 0;
}

function board (size) {
	for (var row = 0; row < size; ++row) {
		var line = '';
		
		for (var col = 0; col < size; ++col) {
			if (isEven(row)) {
				if (isEven(col))
					line += '#';
				else
					line += ' ';
			} else {
				if (isEven(col))
					line += ' ';
				else
					line += '#';
			}
		}
		
		console.log(line);
	}
}

board(8);