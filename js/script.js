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

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#newBook");
const closeButton = document.querySelector("#cancelButton");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
})


addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 300, "have read");
addBookToLibrary("1984", "George Orwell", 328, "have not read");
addBookToLibrary("To Kill A Mockingbird", "Harper Lee", 336, "have read");
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 114, "have read");
addBookToLibrary("Of Mice and Men", "John Steinbeck", 107, "have not read");

displayBooks(myLibrary);