function handleNum(num, handleEven, handleOdd) {
	if (num % 2 === 0) {
		handleEven(num);
	} else {
		handleOdd(num);
	}
}

const handleEven = (num) => {
	console.log(`number ${num} is an even`);
};

const handleOdd = (num) => {
	console.log(`number ${num} is odd`);
};

handleNum(7, handleEven, handleOdd);
