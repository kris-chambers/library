const myLibrary = [];

function Book(title, author, numberOfPages, readStatus) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.readStatus = readStatus;
  };

function addBookToLibrary(title, author, numberOfPages, readStatus) {
  const newBook = new Book(title, author, numberOfPages, readStatus)
  myLibrary.push(newBook);
};

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 300, "have read");
addBookToLibrary("1984", "George Orwell", 328, "have not read");
addBookToLibrary("To Kill A Mockingbird", "Harper Lee", 336, "have read");
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 114, "have read");
addBookToLibrary("Of Mice and Men", "John Steinbeck", 107, "have not read");