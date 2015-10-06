function countBs (str) {
	return countChar(str, 'B');
}

function countChar (str, letter) {
	var count = 0;
	for (var i = 0; i < str.length; ++i) {
		if (str.charAt(i) == letter)
			count++;
	}
	return count;
}

console.log(countBs('Bilbo Baggins'));