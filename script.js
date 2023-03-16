    // Define an array to store the books
    let library = [];

    // Define a function to add a book to the library
    function addBookToLibrary(title, author, rating) {
      // Create a book object with the provided details
      let book = { title, author, rating };
      // Add the book object to the library array
      library.push(book);
      // Save the library array to local storage
      localStorage.setItem('library', JSON.stringify(library));
      displayBooks();
    }
    
    // Define a function to handle the "Add Book" button click
    function addBook() {
      // Get the values of the input fields
      let title = document.getElementById("title").value;
      let author = document.getElementById("author").value;
      let rating = document.getElementById("rating").value;
      // Add the book to the library
      addBookToLibrary(title, author, rating);
    }
    
    // Define a function to display the books in the library
    function displayBooks() {
      // Get the library array from local storage
      library = JSON.parse(localStorage.getItem('library')) || [];
      // Get the book list container element
      let bookList = document.querySelector(".book-list");
      // Clear the container element
      bookList.innerHTML = "";
      // Loop through the library array and create a book card for each book
      library.forEach((book, i) => {
        // Create a book card element
        let bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        // Create a book title element
        let bookTitle = document.createElement("h2");
        bookTitle.textContent = book.title;
        bookCard.appendChild(bookTitle);
        // Create a book author element
        let bookAuthor = document.createElement("p");
        bookAuthor.textContent = "by " + book.author;
        bookCard.appendChild(bookAuthor);
        // Create a book rating element
        let bookRating = document.createElement("p");
        bookRating.textContent = "Rating: " + book.rating;
        bookCard.appendChild(bookRating);
        // Create a delete button element
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
          // Remove the book from the library array
          library.splice(i, 1);
          // Save the updated library array to local storage
          localStorage.setItem('library', JSON.stringify(library));
          displayBooks();
        });
        bookCard.appendChild(deleteButton);
        // Add the book card to the book list container element
        let bookItem = document.createElement("div");
        bookItem.classList.add("book-item");
        bookItem.appendChild(bookCard);
        bookList.appendChild(bookItem);
      });
    }
    
    // Call the displayBooks function when the page is loaded
    window.addEventListener('load', displayBooks);
    