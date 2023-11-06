"use strict";
var Library;
(function (Library_1) {
    class Book {
        constructor(name, desciption, price, hirePrice) {
            this.name = name;
            this.desciption = desciption;
            this.price = price;
            this.hirePrice = hirePrice;
        }
        ;
    }
    class Library {
        constructor(books = []) {
            this.books = books;
        }
        ;
        addBook(name, desciption, price, hirePrice) {
            this.books.push(new Book(name, desciption, price, hirePrice));
        }
        ;
        printBook() {
            console.log(this.books);
        }
    }
    Library_1.Library = Library;
})(Library || (Library = {}));
let cookies = document.cookie.split(';');
console.log(document.cookie);
console.log(cookies);
for (let cookie of cookies) {
    let cookieSegment = cookie.split('=');
    if (cookieSegment[0].trim() == 'a') {
        console.log(cookieSegment[1].trim());
    }
}
const createNewBook = function () {
    let nameElement = document.getElementById("name");
    // let nameElement = document.getElementById("name");
    let bookName = "";
    if (nameElement) {
        bookName = nameElement.value;
    }
    let descriptionElement = document.querySelector('[name=description]');
    let desciption = "";
    if (descriptionElement) {
        desciption = descriptionElement.value;
    }
    let priceElement = document.querySelector('[name=price]');
    let price = 0;
    if (priceElement) {
        price = parseInt(priceElement.value);
    }
    let hirePriceElement = document.querySelector('[name=hire_price]');
    let hirePrice = 0;
    if (hirePriceElement) {
        hirePrice = parseInt(hirePriceElement.value);
    }
    let library = new Library.Library();
    library.addBook(bookName, desciption, price, hirePrice);
    library.printBook();
};
