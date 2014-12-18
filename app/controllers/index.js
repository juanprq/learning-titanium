$.index.open();

var myBooks = Alloy.Collections.books;

var book = Alloy.createModel('books', {
  title: 'Great expectations',
  author: 'Charles Dickens'
});