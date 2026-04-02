function getCurrentYear() {
  return new Date().getFullYear();
}

function isDigigtInStr(str){
   return str.split('').some(char => char >= '0' && char <= '9');
}


class Book{

    #title;
    #author;
    #year;
    #isAvailable;

    constructor(title, author, year){
        this.#title = title;
        this.#author = author;
        this.#year = year;
        this.#isAvailable = true;

    }

    get title(){

        if(!this.#title){
            return "title is not defined!";
        }

        return this.#title;
    }

     

    set title(value){

        if(!value){
            return "invalid value, value is Empty!";
        }

        this.#title = value;

    }

    get author(){

        if(!this.#author){
            return "author is not defined!";
        }

        return this.#author;
    }

    set author(value){

        if(!value){
            return "invalid value, value is Empty!";
        }

        this.#author = value;
    }

    get year(){

        return this.#year;

    }

    set year(value){
        
        if(value < 1450 || value > getCurrentYear()){
            return "invalid value for set year!";
        }

        this.#year = value;

    }

    get isAvailable(){
        return this.#isAvailable;
    }

    borrowBook(){

        if(this.#isAvailable){
            this.#isAvailable = false;
        }

        else{
            return "book is unavailable:" ;
        }
    }

    returnBook(){

        if(!this.#isAvailable){
            this.#isAvailable = false;
        }

        else{
            return "book is available: ";
        }
    }

    matchesTitle(word){

        if(this.#title.includes(word)){
            return true;
        }

        return false;

    }

    getInfo(){

        if(!this.#title){
            return ("the book must have a title:");
        }

        if(!this.#author){
            return ("the book must have a author name:");
        }

        if(typeof this.#year !== "number" || (this.#year < 1450 || this.#year > getCurrentYear())){
            return ("year of publication must be number, and in range(1450 - currentYear):");
        }

        return `book title: ${this.#title}\nauthor: ${this.#author}\nyear of publication: ${this.#year}\n`;
    }

}

class Reader{
    #name;
    #borrowedBooks;
    constructor(name){
        this.#name = name;
        this.#borrowedBooks = [];
    }

    get name(){

        if(!this.#name){
            return ("name is not defined!");
        }

        return this.#name;
    }

    set name(value){

        if(!value && isDigigtInStr(value)){
            return ("invalid value!");
        } 

        this.#name = value;
    }

    get borrowedBooks(){
        if(this.#borrowedBooks.length === 0){
            return ("there are nor borrowed book!");
        }

        return this.#borrowedBooks;
    }

    get borrowedBooksCount(){
        let count = 0;
        this.#borrowedBooks.forEach(() => ++count);
        return count;
    }


    takeBook(book){

        if(book.isAvailable){
            this.#borrowedBooks.push(book);
            book.borrowBook();
            return;
        }

        return "the book is unavailable!";

    }

    giveBackBook(book){

        if(!book.isAvailable){
            this.#borrowedBooks = this.#borrowedBooks.filter(e => e !== book);
            book.returnBook();
            return;
        }

        return "the book is already available!";
    }

    hasBook(book){

        if(this.#borrowedBooks.includes(book)){
            return true;
        }

        return false;
    }

    showBorrowedBooks(){
        return this.#borrowedBooks.map(e => e.title); 

    }

    getInfo(){

        return `${this.#name} has ${this.borrowedBooksCount} borrowed books`;

    }

}

class Library{
    #name;
    #Book = [];
    #Reader = [];

    constructor(name){
        this.#name = name;
    }

    get name(){

        if(!this.#name){
            return ("name is not defined!");
        }

        return this.#name;
    }

    set name(value){

        if(!value && isDigigtInStr(value)){
            return ("invalid value!");
        } 

        this.#name = value;
    }

    get books(){

        if(this.#Book.length === 0){
            return (`there are not this book in ${this.#name} library`);
        }

        return this.#Book;
    }

    get readers(){

        if(this.#Reader.length === 0){
            return (`there are not readers in ${this.#name} library`);
        }

        return this.#Reader;
    }

    addBook(book){

         if(!book.title){
            return ("the book must have a title:");
        }

        if(!book.author){
            return ("the book must have a author name:");
        }

        if(typeof book.year !== "number" || (book.year < 1450 || book.year > getCurrentYear())){
            return ("year of publication must be number, and in range(1450 - currentYear):");
        }

        this.#Book.push(book);

    }

    registerReader(reader){
        this.#Reader.push(reader);
    }

    findBookByTitle(title){
        

        const theBook = this.#Book.find(e => e.title === title);
        
        if(theBook){
            return theBook;
        }

        return null;
    }

    findBooksByAuthor(authorName){
        
        return this.#Book.filter(e => e.author === authorName);
    }

    giveBookToReader(title, reader){

        const findBook = this.findBookByTitle(title);

        if(findBook){
            reader.takeBook(findBook);
        }
        else{
            return `there is not with name ${title} book in library:`;
        }
    }

    acceptBookFromReader(title, reader){

        const findBook = this.findBookByTitle(title);

        if(findBook){
            reader.giveBackBook(findBook);
        }
        else{
            return `there is not with name ${title} book in library:`;
        }
    }

    showAvailableBooks(){
        return this.#Book.filter(e => e.isAvailable);
    }

    showAllBooks(){

        if(this.#Book.length === 0){
            return "there are not book in library: ";
        }

        this.#Book.forEach(e => console.log(e.getInfo()));
        return "";
    }

    getLibraryInfo(){
         return `${this.#name}: ${this.#Book.length} books, ${this.#Reader.length} readers`;
    }
}

const book1 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);
const book2 = new Book("Harry Potter", "J. K. Rowling", 1997);
const book3 = new Book("1984", "George Orwell", 1949);

const reader1 = new Reader("Anna");
const reader2 = new Reader("David");

const library = new Library("Central Library");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.registerReader(reader1);
library.registerReader(reader2);

console.log("=== Library info ===");
console.log(library.getLibraryInfo());

console.log("=== All books ===");
console.log(library.showAllBooks());

console.log("=== Find by title ===");
console.log(library.findBookByTitle("1984"));

console.log("=== Find by author ===");
console.log(library.findBooksByAuthor("George Orwell"));

console.log("=== Available books ===");
console.log(library.showAvailableBooks());

console.log("=== Give book to reader ===");
library.giveBookToReader("The Hobbit", reader1);
console.log(reader1.showBorrowedBooks());
console.log(book1.getInfo());

console.log("=== Give another book to reader ===");
library.giveBookToReader("Harry Potter", reader1);
console.log(reader1.getInfo());

console.log("=== Try to borrow same book again ===");
library.giveBookToReader("The Hobbit", reader2);

console.log("=== Return book ===");
library.acceptBookFromReader("The Hobbit", reader1);
console.log(reader1.showBorrowedBooks());
console.log(book1.getInfo());

console.log("=== Final available books ===");
console.log(library.showAvailableBooks());

console.log("=== Final library info ===");
console.log(library.getLibraryInfo());

