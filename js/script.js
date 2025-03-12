const myLibrary = [];

function Book(title, author, numberOfPages, readStatus) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.readStatus = readStatus;
};

function addBookToLibrary(book) {
  const newBook = new Book(book.title, book.author, book.numberOfPages, book.readStatus);
  myLibrary.push(newBook);
  console.log("Book added to library:", book.title, "My library size:", myLibrary.length)
};

function displayBooks(arrayOfBooks) {
  const library = document.querySelector("#library");
  
  for (let i = 0; i < arrayOfBooks.length; i++) {
    const newDiv = document.createElement("div");
    const newSpan = document.createElement("span");
    const newButton = document.createElement("button");
    const deleteText = document.createTextNode("Delete");
    
    newSpan.innerHTML = `Title: ${arrayOfBooks[i].title}<br>
                      Author: ${arrayOfBooks[i].author}<br>
                      Number of Page: ${arrayOfBooks[i].numberOfPages}<br>
                      Read Status: ${arrayOfBooks[i].readStatus}`;

    library.appendChild(newDiv);
    newDiv.classList.add("bookCard");
    newDiv.dataset.uuid = `${arrayOfBooks[i].id}`;
    newDiv.appendChild(newSpan);
    newSpan.classList.add("bookInfo");
    newSpan.appendChild(newButton);
    newButton.classList.add("deleteButton");
    newButton.id = `${arrayOfBooks[i].id}`;
    newButton.appendChild(deleteText);
    newButton.dataset.uuid = `${arrayOfBooks[i].id}`;
    // newButton.addEventListener("click", (e) => {
    //   const bookId = e.target.id;
    //   console.log('Clicked button:', bookId)

    //   const bookToRemove = myLibrary.findIndex(myLibrary => myLibrary.id == bookId);
    //   if (bookToRemove !== -1) {
    //     myLibrary.splice(bookToRemove, 1);
    //     console.log(myLibrary);
    //   };
    // });
  };
  console.log("Displayed books.")
};

function clearBooks() {
  const library = document.querySelector("#library");
  library.innerHTML = '';
  console.log("Screen cleared.")
};

function clearForm() {
  form = document.querySelector("#addBookForm");
  form.reset();
  console.log("Form cleared.")
};

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#newBook");
const closeButton = document.querySelector("#cancelButton");
const addButton = document.querySelector("#addButton");

function addInput() {
  const titleInput = document.querySelector("#title");
  const authorInput = document.querySelector("#author");
  const numberOfPagesInput = document.querySelector("#numberOfPages");
  const readStatusInput = document.querySelector("#readStatus");

  return { title: titleInput.value, author: authorInput.value, numberOfPages: numberOfPagesInput.value, readStatus: readStatusInput.value };
};

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

addButton.addEventListener("click", (event) => {  
  event.preventDefault();
  values = addInput();
  addBookToLibrary(values);
  dialog.close();
  clearForm();
  clearBooks();
  displayBooks(myLibrary);
});

const theHobbit = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  numberOfPages: 300,
  readStatus: "have read",
};

const _1984 = {
  title: "1984",
  author: "George Orwell",
  numberOfPages: 328,
  readStatus: "have not read",
};

const toKillAMockingbird = {
  title: "To Kill A Mockingbird",
  author: "Harper Lee",
  numberOfPages: 336,
  readStatus: "have read",
};

const theGreatGatsby = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  numberOfPages: 114,
  readStatus: "have read",
};

const ofMiceAndMen = {
  title: "Of Mice And Men",
  author: "John Steinbeck",
  numberOfPages: 107,
  readStatus: "have not read",
};

addBookToLibrary(theHobbit);
addBookToLibrary(_1984);
addBookToLibrary(toKillAMockingbird);
addBookToLibrary(theGreatGatsby);
addBookToLibrary(ofMiceAndMen);

displayBooks(myLibrary);

const deleteButtons = document.querySelectorAll(".deleteButton");

deleteButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    // e.preventDefault();
    // e.stopPropagation();
    
    const bookId = e.target.id;
    console.log('Removed book:', bookId)

    const bookToRemove = myLibrary.findIndex(myLibrary => myLibrary.id == bookId);
    if (bookToRemove !== -1) {
      myLibrary.splice(bookToRemove, 1);
    }
    console.log("Added delete button event listeners.");
    clearBooks();
    displayBooks(myLibrary);
    });
});