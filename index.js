// JS for Add new Book and display the List
const bookForm = document.getElementById("bookForm");
const bookItems = document.getElementById("bookItems");

// Function to add a book to the list
function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  // Check if a book with the same title and author already exists
  const existingBooks = bookItems.querySelectorAll("li");
  let isDuplicate = false;

  existingBooks.forEach((bookItem) => {
    const bookDetails = bookItem.textContent.toLowerCase();
    if (
      bookDetails.includes(title.toLowerCase()) &&
      bookDetails.includes(author.toLowerCase())
    ) {
      isDuplicate = true;
      return;
    }
  });

  if (isDuplicate) {
    // Display an error message for duplicates
    const errorMessage = document.createElement("div");
    errorMessage.className = "alert alert-danger alert-dismissible mt-4";

    const closeBtn = document.createElement("button");
    closeBtn.className = "btn-close";
    closeBtn.setAttribute("data-bs-dismiss", "alert");

    errorMessage.appendChild(closeBtn);
    errorMessage.innerHTML += "This book is already in the list!";
    bookForm.appendChild(errorMessage);
  } else {
    // Create a new list item for the book and display a success message
    const li = document.createElement("li");
    li.textContent = `Title: ${title}, Author: ${author}, ISBN: ${isbn}`;
    bookItems.appendChild(li);

    // Clear the form fields
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";

    // Display a success message with a close button
    const successMessage = document.createElement("div");
    successMessage.className = "alert alert-success alert-dismissible mt-4";

    const closeBtn = document.createElement("button");
    closeBtn.className = "btn-close";
    closeBtn.setAttribute("data-bs-dismiss", "alert");

    successMessage.appendChild(closeBtn);
    successMessage.innerHTML += "Book added successfully!";
    bookForm.appendChild(successMessage);
  }
}

bookForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addBook();
});
//----------------------End---------------------//

// JS for Search Section
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchResult = document.getElementById("searchResult");

function searchBooks() {
  searchResult.innerHTML = "";
  const searchText = searchInput.value.toLowerCase();
  let found = false;
  // Loop through the list of books
  const bookListItems = bookItems.querySelectorAll("li");
  bookListItems.forEach((bookItem) => {
    const bookDetails = bookItem.textContent.toLowerCase();
    if (bookDetails.includes(searchText)) {
      const resultItem = document.createElement("li");
      resultItem.textContent = bookItem.textContent;
      searchResult.appendChild(resultItem);
      found = true;
    }
  });
  // if book not found in the list
  if (!found) {
    const alertMessage = document.createElement("div");
    alertMessage.className = "alert alert-danger mt-4";
    alertMessage.textContent = "Book not found in the list";
    searchResult.appendChild(alertMessage);
  }
}
// Event listener for form submission
searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  searchBooks();
});
