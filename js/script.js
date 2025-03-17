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
  // console.log("Book added to library:", book.title, "- My library size:", myLibrary.length)
};

function displayBooks(arrayOfBooks) {
  const library = document.querySelector("#library");
  
  for (let i = 0; i < arrayOfBooks.length; i++) {
    const newDiv = document.createElement("div");
    const newSpan = document.createElement("span");
    const newDeleteButton = document.createElement("button");
    const deleteButtonText = document.createTextNode("Delete");
    const newReadStatusButton = document.createElement("button");
    const readStatusText = document.createTextNode("Mark As Read");

    newSpan.innerHTML = `Title: ${arrayOfBooks[i].title}<br>
                      Author: ${arrayOfBooks[i].author}<br>
                      Number of Pages: ${arrayOfBooks[i].numberOfPages}<br>`;

    library.appendChild(newDiv);
    newDiv.classList.add("bookCard");
    newDiv.dataset.uuid = `${arrayOfBooks[i].id}`;
    newDiv.appendChild(newSpan);
    newSpan.classList.add("bookInfo");
    newSpan.appendChild(newReadStatusButton);
    newSpan.appendChild(newDeleteButton);
    newReadStatusButton.classList.add("readStatusButton");
    newReadStatusButton.id = `${arrayOfBooks[i].id}`;
    newReadStatusButton.appendChild(readStatusText);
    newDeleteButton.classList.add("deleteButton");
    newDeleteButton.id = `${arrayOfBooks[i].id}`;
    newDeleteButton.appendChild(deleteButtonText);
    newDeleteButton.dataset.uuid = `${arrayOfBooks[i].id}`;
    
    newDeleteButton.addEventListener("click", (e) => {
      const bookId = e.target.id;
      const library = document.querySelector("#library");
      const bookToRemove = document.querySelector(`div[data-uuid="${bookId}"`);

      library.removeChild(bookToRemove);
    });

    newReadStatusButton.addEventListener("click", (e) => {
      const bookId = e.target.id;
      
      if (newReadStatusButton.innerHTML == "Mark As Read") {
        newReadStatusButton.innerHTML = "";
        newReadStatusButton.innerHTML = "Mark As Not Read";
      } else if (newReadStatusButton.innerHTML == "Mark As Not Read") {
        newReadStatusButton.innerHTML = "";
        newReadStatusButton.innerHTML = "Mark As Read";
      };
   });
  };
  // console.log("Displayed books.")
};

function clearBooks() {
  const library = document.querySelector("#library");
  library.innerHTML = '';
  // console.log("Screen cleared.")
};

function clearForm() {
  form = document.querySelector("#addBookForm");
  form.reset();
  // console.log("Form cleared.")
};

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#newBook");
const closeButton = document.querySelector("#cancelButton");
const addButton = document.querySelector("#addButton");

function addInput() {
  const titleInput = document.querySelector("#title");
  const authorInput = document.querySelector("#author");
  const numberOfPagesInput = document.querySelector("#numberOfPages");
  // const readStatusInput = document.querySelector("#readStatus");

  return { title: titleInput.value, author: authorInput.value, numberOfPages: numberOfPagesInput.value };
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
  readStatus: "true",
};

const _1984 = {
  title: "1984",
  author: "George Orwell",
  numberOfPages: 328,
  readStatus: "false",
};

const toKillAMockingbird = {
  title: "To Kill A Mockingbird",
  author: "Harper Lee",
  numberOfPages: 336,
  readStatus: "true",
};

const theGreatGatsby = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  numberOfPages: 114,
  readStatus: "true",
};

const ofMiceAndMen = {
  title: "Of Mice And Men",
  author: "John Steinbeck",
  numberOfPages: 107,
  readStatus: "false",
};

addBookToLibrary(theHobbit);
addBookToLibrary(_1984);
addBookToLibrary(toKillAMockingbird);
addBookToLibrary(theGreatGatsby);
addBookToLibrary(ofMiceAndMen);

displayBooks(myLibrary);