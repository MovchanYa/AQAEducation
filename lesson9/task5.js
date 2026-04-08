const users = [
    { name: "Alice", email: "alice@gmail.com", age: 30 },
    { name: "Bob", email: "bob@gmail.com", age: 25 },
    { name: "Rom", email: "rom@gmail.com", age: 35 },
    { name: "David", email: "david@gmail.com", age: 40 }
];

for (const user of users) {
    console.log(`Name: ${user.name}, Email: ${user.email}, Age: ${user.age}`);
}