const cardContainer = document.querySelector(".container");
let myLibrary = [];

function AddBook() {
    document.getElementById("add-form").style.display = "block";
    document.getElementById("add-book").style.display = "none";
}
function CloseForm() {
    document.getElementById("add-form").style.display = "none";
    document.getElementById("add-book").style.display = "block";
}

function Book(title, author, pages) {
    if (!new.target){
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function AddBookToLibrary () {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;

    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);

    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    
    const addTitle = document.createElement("h1");
    addTitle.textContent = "Title: " + newBook.title;
    const addAuthor = document.createElement("p");
    addAuthor.textContent = "Author: " + newBook.author;
    const addPages = document.createElement("p");
    addPages.textContent = "Pages: " + newBook.pages;
    const read = document.createElement("label");
    read.textContent = "Read: ";
    const readCheckbox = document.createElement("input");
    readCheckbox.type = "checkbox";
    readCheckbox.checked = false

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    
    deleteBtn.addEventListener("click", () => {
    cardContainer.removeChild(bookCard);
    });
    
    read.appendChild(readCheckbox)

    bookCard.appendChild(addTitle);
    bookCard.appendChild(addAuthor);
    bookCard.appendChild(addPages);
    bookCard.appendChild(read);
    bookCard.appendChild(deleteBtn);


    cardContainer.appendChild(bookCard);
}