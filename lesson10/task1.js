import { Book } from './Book.js';
import { EBook } from './EBook.js';

const allBooks = [];

console.log('------Частина 1------');

const book1 = new Book('Name1', 'Author1', 1122);
const book2 = new Book('Name2', 'Author2', 2019);
const book3 = new Book('0', 'Author3', 2020);

book1.printInfo();
book2.printInfo();
book3.printInfo();

console.log('------Частина 2------');

const myEBook = new EBook('Dune', 'Author Name', 1933, 'PDF');
myEBook.printInfo();

console.log('------Частина 3------');
try {
	const book4 = new Book('Name1', 'Author1', 1122);
	allBooks.push(book4);
	console.log('Книгу додано');
} catch (error) {
	console.error('Помилка:', error.message);
} finally {
	console.log('Робота завершена');
}

console.log('------------');

try {
	const book5 = new Book('Name2', 'Author2', 'sdf');
	allBooks.push(book5);
	console.log('Книгу додано');
} catch (error) {
	console.error('Помилка:', error.message);
} finally {
	console.log('Робота завершена');
}

console.log('------------');

try {
	const book6 = new Book('0', 'Author3', 19999);
	allBooks.push(book6);
	console.log('Книгу додано');
} catch (error) {
	console.error('Помилка:', error.message);
} finally {
	console.log('Робота завершена');
}

console.log('------------');

try {
	const myEBook1 = new EBook('Dune', 'Author Name', 933, 'PDF');
	allBooks.push(myEBook1);
	console.log('Книгу додано');
} catch (error) {
	console.error('Помилка:', error.message);
} finally {
	console.log('Робота завершена');
}

console.log('------------');

try {
	const myEBook2 = new EBook('Shre', 'Author Name', 1933, 'film');
	allBooks.push(myEBook2);
} catch (error) {
	console.error('Помилка:', error.message);
} finally {
	console.log('Робота завершена');
}

console.log('------------');
allBooks.push(book1, book2, book3);
for (let i = 0; i < allBooks.length; i++) {
	const book = allBooks[i];
	book.printInfo();
}

console.log('------Частина 4------');

console.log('The oldest book:');
const oldestB = Book.oldestBook(allBooks);
oldestB.printInfo();

console.log('------Частина 5------');

const ebook = EBook.addEBook(allBooks[0], 'PDF');
ebook.printInfo();
