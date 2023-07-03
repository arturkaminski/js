// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookName) {

  const bookList1 = bookList + bookName;
  return bookList1;
  
  // Change code above this line
}

// Change code below this line
function remove(bookName) {
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    const bookList1 = bookList.slice(book_index, 1);
    return bookList1;

    // Change code above this line
    }

}

console.log(add(bookList, "A Brief History of Time"));
console.log("\n");
console.log(remove(bookList, "On The Electrodynamics of Moving Bodies"));
