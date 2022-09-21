// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line

//const newBookList = bookList;
/*
function add(newBookLi, bookName) {

  newBookLi.push(bookName);
  return newBookLi;
  
  // Change code above this line
}

// Change code below this line
function remove(newBookLi, bookName) {
  const book_index = newBookLi.indexOf(bookName);
  if (book_index >= 0) {

    newBookLi.splice(book_index, 1);
    return newBookLi;

    // Change code above this line
    }
}*/

function add(list, bookName) {
  return [...list, bookName];
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

function remove(list, bookName) {
  return list.filter(book => book !== bookName);
}

