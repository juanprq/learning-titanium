$.index.open();

var myBooks = Alloy.Collections.books;

var book = Alloy.createModel('books', {
  title: 'Great expectations',
  author: 'Charles Dickens'
});

myBooks.add(book);
book.save();

function showBook(event) {
 var selectedBook = event.source;
 var args = {
   title: selectedBook.title,
   author: selectedBook.author
 };
 
 var bookView = Alloy.createController("bookdetails", args).getView();
 bookView.open();
}

function addBook () {
  var myAddBook = Alloy.createController("addbook", {}).getView();
  myAddBook.open();
}