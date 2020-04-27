function getRandomNumberAsArray() {
	let generated = String(Math.random() * 10000000000000000000);
	let result = [];

	for(let num of generated) {
		if(!result.includes(num)) {
			result.push(num)
		}
		if(result.length === 4) {
			return result;
		}
	}
}

function startGame() {
	let riddle = getRandomNumberAsArray();

	while(true) {
		let answer = prompt("Угадайте 4-х значное число: ").split('');
		let result = getBullsAndCowsCount(riddle, answer);
		console.log(
			`Ваш ответ: ${answer},     быков - ${result.bullsCount},     коров - ${result.cowsCount}`
		);
		if (riddle.toString() === answer.toString()){
			console.log('Вы победили');
			break;
		}
	}
	console.log(`Загадка - ${riddle}`);
}

function getBullsAndCowsCount(riddle, answer) {
	let bullsCount = getBullsCount(riddle, answer);
	let cowsCount = getCowsCount(riddle, answer);
	return {
		"bullsCount": bullsCount,
		"cowsCount": cowsCount - bullsCount,
	}
}

function getBullsCount(riddle,answer) {
	let count = 0;
	for(let i = 0; i < riddle.length; i++) {
		if(riddle[i] == answer[i]) {
			count++;
		}
	}
	return count;
}


function getCowsCount(riddle,answer) {
	let count = 0;
	for(let value of riddle) {
		if(answer.includes(value)) {
			count++;
		}
	}
	return count;
}
startGame();
