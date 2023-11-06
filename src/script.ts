

namespace Library {
    class Book {
        constructor (
            private name: string,
            private desciption: string,
            private price: number,
            private hirePrice: number
        ) {};
    }

    export class Library {
        constructor(
            private books: Array<Book> = [],
        ) {};

        public addBook(name: string, desciption: string, price: number, hirePrice: number) {
            this.books.push(new Book(
                name,
                desciption,
                price,
                hirePrice,
            ));
        };

        public printBook() {
            console.log(this.books);
        }
    }

}

let cookies = document.cookie.split(';')
console.log(document.cookie)
console.log(cookies)
for (let cookie of cookies) {
    let cookieSegment = cookie.split('=');
    if (cookieSegment[0].trim() == 'a') {
        console.log(cookieSegment[1].trim())
    }
}


const createNewBook: Function = function () : void {
    let nameElement: HTMLInputElement | null = (<HTMLInputElement>document.getElementById("name"));
    // let nameElement = document.getElementById("name");

    let bookName: string = "";
    if (nameElement) {
        bookName = nameElement.value;
    }

    let descriptionElement: HTMLInputElement | null = (<HTMLInputElement>document.querySelector('[name=description]'));
    let desciption: string = "";
    if (descriptionElement) {
        desciption = descriptionElement.value;
    }

    let priceElement: HTMLInputElement | null = (<HTMLInputElement>document.querySelector('[name=price]'));
    let price: number = 0;
    if (priceElement) {
        price = parseInt(priceElement.value);
    }

    let hirePriceElement: HTMLInputElement | null = (<HTMLInputElement>document.querySelector('[name=hire_price]'));
    let hirePrice: number = 0;
    if (hirePriceElement) {
        hirePrice = parseInt(hirePriceElement.value);
    }

    let library = new Library.Library();

    library.addBook(bookName, desciption, price, hirePrice)
    library.printBook()
}