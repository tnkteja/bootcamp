function Book (title,author,pages, read) {
this.title = title;
this.author=author;
this.pages=pages;
this.read =read;
}

Book.prototype.info=function(){
    return `${this.title} by ${this.author},${this.pages} pages, ${this.read?"read":"not read yet"}`
}

let book = new Book("the hobbit","jk rowling", 295, true)
console.log(book.info())