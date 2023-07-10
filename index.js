/* eslint-disable max-classes-per-file */

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class BookCollection {
  constructor() {
    this.books = this.getBooks();
  }

  /* eslint-disable-next-line */
  addBookToList(book) {
    const list = document.querySelector('#collection');

    const bookDisplay = document.createElement('div');
    bookDisplay.className = 'Collection1';
    bookDisplay.innerHTML = `
    <div class="book1">
      <p class="bookTitle">${book.title}</p>
      <p class="bookAuthor"> by ${book.author}.</p>
    </div>
      <button class="delete">Remove</button>
    `;

    list.appendChild(bookDisplay);
  }

  /* eslint-disable-next-line */
  getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  displayBooks() {
    this.books.forEach((book) => this.addBookToList(book));
  }

  addBook(book) {
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  /* eslint-disable-next-line */
  clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }

  handleFormSubmit(event) {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;

    const book = new Book(title, author);

    this.addBookToList(book);
    this.addBook(book);
    this.clearFields();
  }

  handleCollectionClick(event) {
    if (event.target.classList.contains('delete')) {
      const bookTitle = event.target.parentElement.querySelector('.bookTitle').textContent;
      event.target.parentElement.remove();
      this.removeBook(bookTitle);
    }
  }

  initialize() {
    document.addEventListener('DOMContentLoaded', () => {
      this.displayBooks();
    });

    document.querySelector('#book-form').addEventListener('submit', (event) => {
      this.handleFormSubmit(event);
    });

    document.querySelector('#collection').addEventListener('click', (event) => {
      this.handleCollectionClick(event);
    });
  }
}

const collection = new BookCollection();
collection.initialize();
