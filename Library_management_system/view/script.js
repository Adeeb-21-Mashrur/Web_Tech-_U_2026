// Load Books Automatically
window.onload = function () {
    loadBooks();
};

// Add or Update Book
document.getElementById("bookForm").addEventListener("submit", function (e) {

    e.preventDefault();

    let id = document.getElementById("book_id").value;
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let category = document.getElementById("category").value;
    let status = document.getElementById("status").value;

    let action = id === "" ? "add" : "update";

    let xhr = new XMLHttpRequest();

    xhr.open("POST", "../ajax/handler.php", true);

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onload = function () {
        alert(this.responseText);

        document.getElementById("bookForm").reset();
        document.getElementById("book_id").value = "";
        document.getElementById("submitBtn").innerText = "Add Book";

        loadBooks();
    };

      xhr.send(
        "action=" + action +
        "&id=" + id +
        "&title=" + title +
        "&author=" + author +
        "&category=" + category +
        "&status=" + status
    );
});

// Load All Books
function loadBooks() {

    let xhr = new XMLHttpRequest();

    xhr.open("POST", "../ajax/handler.php", true);

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onload = function () {
        document.getElementById("bookData").innerHTML = this.responseText;
    };

    xhr.send("action=fetch");
}

// Edit Book
function editBook(id) {

    let xhr = new XMLHttpRequest();

    xhr.open("POST", "../ajax/handler.php", true);

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onload = function () {

        let book = JSON.parse(this.responseText);

        document.getElementById("book_id").value = book.id;
        document.getElementById("title").value = book.title;
        document.getElementById("author").value = book.author;
        document.getElementById("category").value = book.category;
        document.getElementById("status").value = book.status;

        document.getElementById("submitBtn").innerText = "Update Book";
    };

    xhr.send("action=edit&id=" + id);
}

// Delete Book
function deleteBook(id) {

    if (confirm("Are you sure to delete this book?")) {

        let xhr = new XMLHttpRequest();

        xhr.open("POST", "../ajax/handler.php", true);

        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhr.onload = function () {
            alert(this.responseText);
            loadBooks();
        };

        xhr.send("action=delete&id=" + id);
    }
}