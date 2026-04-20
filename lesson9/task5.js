const users = [
	{ name: 'Alice', email: 'alice@gmail.com', age: 30 },
	{ name: 'Bob', age: 25 },
	{ email: 'rom@gmail.com' },
	{ age: 40 },
	{},
];

for (const { name, email, age } of users) {
	const eName = name || false;
	const eEmail = email ?? false;
	const eAge = age || false;

	console.log(`Name: ${eName}, Email: ${eEmail}, Age: ${eAge}`);
}
