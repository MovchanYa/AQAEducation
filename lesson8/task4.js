const numbers = [3, 2, 1, 8, 12, 6];
const indexedNumbers = [];

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] % 2 === 0) {
		indexedNumbers.push(numbers[i]);
	}
}

console.log(indexedNumbers);
