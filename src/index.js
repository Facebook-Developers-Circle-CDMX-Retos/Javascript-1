const findNumber = function (number) {
	//aqui escribiras tu codigo
	if (isNaN(number)) throw new Error('argument is not a number');

	for (let i = 2; i < number; i++) {
		if (number % i === 0) return false;
	}

	return number !== 1;
}; 

module.exports = findNumber;