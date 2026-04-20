export class Book {
	constructor(title, author, year) {
		this.title = title;
		this.author = author;
		this.year = year;
	}

	get title() {
		return this._title;
	}

	set title(value) {
		if (value.length <= 0) {
			throw new Error('Title cannot be empty');
		}
		this._title = value;
	}

	get author() {
		return this._author;
	}

	set author(value) {
		if (value.length <= 0) {
			throw new Error('Author cannot be empty');
		}
		this._author = value;
	}

	get year() {
		return this._year;
	}

	set year(value) {
		if (typeof value !== 'number') {
			throw new Error('Year must be a number');
		} else if (value > 2026) {
			throw new Error('Year cannot be in the future');
		}
		this._year = value;
	}

	static oldestBook(books) {
		const sortedBooks = [...books].sort((a, b) => a.year - b.year);
		return sortedBooks[0];
	}

	printInfo() {
		console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}`);
	}
}
