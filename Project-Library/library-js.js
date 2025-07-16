const cardContainer = document.querySelectorAll(".container");
let myLibrary = [];

function addBook() {
    document.getElementById("add-form").style.display = "block";
    document.getElementById("add-book").style.display = "none";
}
function closeForm() {
    document.getElementById("add-form").style.display = "none";
    document.getElementById("add-book").style.display = "block";
}

function book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}