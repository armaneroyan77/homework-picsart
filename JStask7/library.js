class Book{

    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
        this.isAvailable = true;
    }

    getInfo(){

        if(!this.title){
            throw new Error("the book must have a title:");
        }

        if(!this.author){
            throw new Error("the book must have a author name:");
        }

        if(typeof this.year !== "number"){
            throw new Error("year of publication must be number, and in range(1450 - currentYear):");
        }

        return `book title: ${this.title}\nauthor: ${this.author}\nyear of publication: ${this.year}\n`;
    }

    borrowBook(){

        if(this.isAvailable){
            this.isAvailable = false;
        }

        else{
            return "book is unavailable:" ;
        }
    }

    returnBook(){

        if(!this.isAvailable){
            this.isAvailable = false;
        }

        else{
            return "book is available: ";
        }
    }

    matchesAuthor(authorName){
        
        if(typeof authorName !== "string"){
            throw new Error("parametr authorName must be string type: ");
        }

        if(authorName.toLowerCase() === this.author.toLowerCase()){
            return true;
        }
        
        return false;
        
    }

    matchesTitle(word){

        if(this.title.includes(word)){
            return true;
        }

        return false;

    }

}

class Library{
    constructor(){
        this.books = [];
    }

    addBook(book){

         if(!book.title){
            throw new Error("the book must have a title:");
        }

        if(!book.author){
            throw new Error("the book must have a author name:");
        }

        if(typeof book.year !== "number"){
            throw new Error("year of publication must be number, and in range(1450 - currentYear):");
        }

        this.books.push(book);

    }
    

    removeBook(title){
        
        let index = this.books.findIndex(e => e.title === title);
        let count = 0;

        while(index !== -1){

            this.books.splice(index, 1);
            index = this.books.findIndex(e => e.title === title);
            ++count;
            
        }

        if(!count){
            return `there is not with ${title} book in library:`;
        }
    }

    findBookByTitle(title){

        const theBook = this.books.find(e => e.title === title);

        if(theBook){
            return theBook;
        }

        return null;
    }

    findBooksByAuthor(authorName){
        return this.books.filter(e => e.matchesAuthor(authorName));
    }

    getAvailableBooks(){
           return this.books.filter(e => e.isAvailable === true);
    }

    borrowBook(title){

        const findBook = this.findBookByTitle(title);

        if(findBook){
            findBook.borrowBook();
        }
        else{
            return `there is not with ${title} book in library:`;
        }
    }

    returnBook(title){

       const findBook = this.findBookByTitle(title);

        if(findBook){
            findBook.returnBook();
        }

        else{
            return `there is not with ${title} book in library:`;
        }
    }

    showAllBooks(){

        if(this.books.length !== 0){
            return this.books.map(e => e.getInfo());
        }

    }

    countBooks(){ this.books.forEach(e => console.log(e.getInfo()));

        let count = 0;
        this.books.forEach(() => ++count);
        return count;

    }

    countAvailableBooks(){

        let countAvailableBooks = this.getAvailableBooks().length;
        return countAvailableBooks;
    }

    searchBooks(word){
        return this.books.filter(e => e.matchesTitle(word));
    }

    getOldestBook(){
        const oldBookIsYear = Math.min(...this.books.map(e => e.year)); 
        return (this.books.length === 0)? null: this.books.find(e => e.year === oldBookIsYear);
    }

}




const book1 = new Book("Harry Potter", "J. K. Rowling", 1997);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("Animal Farm", "George Orwell", 1945);
const book4 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

console.log("=== All books ===");
library.showAllBooks();

console.log("=== Count books ===");
console.log(library.countBooks()); // 4

console.log("=== Count available books ===");
console.log(library.countAvailableBooks()); // 4

console.log("=== Find by title ===");
console.log(library.findBookByTitle("1984"));

console.log("=== Find by author ===");
console.log(library.findBooksByAuthor("George Orwell"));

console.log("=== Search books ===");
console.log(library.searchBooks("Harry"));

console.log("=== Borrow book ===");
library.borrowBook("1984");
console.log(library.findBookByTitle("1984"));

console.log("=== Borrow same book again ===");
library.borrowBook("1984");
console.log("=== Return book ===");
library.returnBook("1984");
console.log(library.findBookByTitle("1984"));

console.log("=== Available books ===");
console.log(library.getAvailableBooks());

console.log("=== Oldest book ===");
console.log(library.getOldestBook());

console.log("=== Remove book ===");
library.removeBook("The Hobbit");
console.log(library.countBooks()); // 3

console.log("=== Final books ===");
library.showAllBooks();
