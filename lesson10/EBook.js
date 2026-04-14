import { Book } from './Book.js';

export class EBook extends Book {
    constructor(title, author, year, format) {
        super(title, author, year);
        this.fileFormat = format;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        if (value.length <= 0) {
            throw new Error("File format cannot be empty");
        } else if (value !== "PDF" && value !== "EPUB" && value !== "DOC") {
            throw new Error("File format must be PDF, EPUB, or DOC");
        }
        this._fileFormat = value;
    }

    printInfo() {
    console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}, format: ${this.fileFormat}`);
    }
    
    static addEBook(books, fileFormat) {
        return new EBook(books.title, books.author, books.year, fileFormat);
    }

        
}