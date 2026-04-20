function divide(numerator, denominator) {
	if (denominator === 0) {
		throw new Error('Помилка: ділення на нуль неможливе.');
	}
	if (typeof numerator !== 'number' || typeof denominator !== 'number') {
		throw new Error('Помилка: обидва аргументи мають бути числами');
	} else {
		let result = numerator / denominator;
		console.log(`${numerator}/${denominator} = ${result}`);
		return;
	}
}

try {
	divide(20, 0);
} catch (error) {
	console.error('Помилка:', error.message);
} finally {
	console.log('Робота завершена');
}

console.log('------------');

try {
	divide('are', 0);
} catch (error) {
	console.error('Помилка:', error.message);
} finally {
	console.log('Робота завершена');
}

console.log('------------');

try {
	divide(are, 0);
} catch (error) {
	console.error('Помилка:', error.message);
} finally {
	console.log('Робота завершена');
}

console.log('------------');

try {
	divide(101, 2);
} catch (error) {
	console.error('Помилка:', error.message);
} finally {
	console.log('Робота завершена');
}
