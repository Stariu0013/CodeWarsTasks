function accum(c) {
	return c.split('')
	.map((char,index) => {
		const repeatedChar = char.repeat(index + 1);
		return (repeatedChar.charAt(0).toUpperCase()
		 + repeatedChar.slice(1).toLowerCase();
		 )
	})
	.join('-');
}