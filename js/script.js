const myLibrary = [];

function Book(title, author, numberOfPages, readStatus) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.readStatus = readStatus;
  };

// function addBookToLibrary(title, author, numberOfPages, readStatus) {
//   const newBook = new Book(title, author, numberOfPages, readStatus)
//   myLibrary.push(newBook);
// };

function addBookToLibrary(book) {
  const newBook = new Book(book.title, book.author, book.numberOfPages, book.readStatus);
  myLibrary.push(newBook);
}

function displayBooks(arrayOfBooks) {
  const library = document.querySelector("#library");
  
  for (let i = 0; i < arrayOfBooks.length; i++) {
    const newDiv = document.createElement("div");
    const newSpan = document.createElement("span");
    
    newSpan.innerHTML = `Title: ${arrayOfBooks[i].title}<br>
                      Author: ${arrayOfBooks[i].author}<br>
                      Number of Page: ${arrayOfBooks[i].numberOfPages}<br>
                      Read Status: ${arrayOfBooks[i].readStatus}`;

    library.appendChild(newDiv);
    newDiv.classList.add("bookCard");
    newDiv.appendChild(newSpan);
    newSpan.classList.add("bookInfo");
  }
}

function clearBooks() {
  const library = document.querySelector("#library");
  library.innerHTML = '';
}

function clearForm() {
  form = document.querySelector("#addBookForm");
  form.reset();
}

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#newBook");
const closeButton = document.querySelector("#cancelButton");
const addButton = document.querySelector("#addButton");

function addInput() {
  const titleInput = document.querySelector("#title");
  const authorInput = document.querySelector("#author");
  const numberOfPagesInput = document.querySelector("#numberOfPages");
  const readStatusInput = document.querySelector("#readStatus");

  console.log(`${titleInput.value}, ${authorInput.value}, ${numberOfPagesInput.value}, ${readStatusInput.value}`)
  return { title: titleInput.value, author: authorInput.value, numberOfPages: numberOfPagesInput.value, readStatus: readStatusInput.value };
}

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
})

addButton.addEventListener("click", (event) => {  
  event.preventDefault();
  values = addInput();
  addBookToLibrary(values);
  dialog.close();
  clearForm();
  clearBooks();
  displayBooks(myLibrary)
});

const theHobbit = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  numberOfPages: 300,
  readStatus: "have read"
}

const _1984 = {
  title: "1984",
  author: "George Orwell",
  numberOfPages: 328,
  readStatus: "have not read"
}

const toKillAMockingbird = {
  title: "To Kill A Mockingbird",
  author: "Harper Lee",
  numberOfPages: 336,
  readStatus: "have read"
}

const theGreatGatsby = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  numberOfPages: 114,
  readStatus: "have read"
}

const ofMiceAndMen = {
  title: "Of Mice And Men",
  author: "John Steinbeck",
  numberOfPages: 107,
  readStatus: "have not read"
}

// addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 300, "have read");
addBookToLibrary(theHobbit);
addBookToLibrary(_1984);
addBookToLibrary(toKillAMockingbird);
addBookToLibrary(theGreatGatsby);
addBookToLibrary(ofMiceAndMen);

displayBooks(myLibrary);