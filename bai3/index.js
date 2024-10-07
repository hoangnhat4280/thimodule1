
const books = [
    toan= new Book(123, "Toán", 2003, 3,true),
    van= new Book(234, "Văn", 1999, 4,false),
];


function showListBook() {
    let html = "";
    books.forEach(book => {
        html += `<tr>`;
        html += `<td>${book.bookId}</td>`;
        html += `<td>${book.bookName}</td>`;
        html += `<td>${book.bookPrintYear}</td>`;
        html += `<td>${book.countOfBook}</td>`;
        html += `<td>${book.checkBookStatus()}</td>`;
        html += `</tr>`;
    });
    document.getElementById("bookTableBody").innerHTML = html;
}

function borrowBook() {
    const borrowBookId = document.getElementById("borrowBookId").value;
    const book = books.find(b => b.bookId === borrowBookId);
    if (book) {
        if (book.borrow()) {
            alert("Mượn thành công");
        } else {
            alert("Đã hết sách");
        }
        showListBook();
    } else {
        alert("Không có sách này");
    }
}

function addBook() {
    const bookId = document.getElementById("bookId").value;
    const bookName = document.getElementById("bookName").value;
    const bookPrintYear = document.getElementById("bookPrintYear").value;
    const countOfBook = document.getElementById("countOfBook").value;
    books.push(newBook);
    showListBook();
}

