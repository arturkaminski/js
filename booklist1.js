// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
console.log("before function\n");
console.log(bookList);
console.log("\nafter the function\n");
// Change code below this line
function add(bookList, bookName) {
  let bookList1 = bookList.slice();
  bookList1.push(bookName);
  return bookList1;
  
  // Change code above this line
}

// Change code below this line
function remove(bookName) {
  let bookList1 = bookList.slice();
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    bookList1.splice(book_index, 1);
    return bookList1;

    // Change code above this line
    }
}
console.log(add(bookList, "A Brief History of Time"));
console.log("\n");
console.log(bookList);
console.log("\n");
