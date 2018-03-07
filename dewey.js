'use strict';

const library = [
  { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
  { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
  { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
  { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
  { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
  { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
  { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
  { author:'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
  { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
  { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
];

const findBook = (book, beginning=0, end=library.length) => {
  if (beginning > end) {
    return 'Book not found';
  }
    
  const index = Math.floor((beginning + end) / 2);
  const currentBook = library[index];

  if (currentBook.dewey === book.dewey) {
    for (let i=0; i<library.length; i++) {
      if (!library[index + i]) {
        break;
      }
      if (library[index + i].title === book.title) {
        return library[index + i];
      } 
      if (library[index + i].dewey !== book.dewey) {
        break;
      }
    }
    for (let i=1; i<library.length; i++) {
      if (!library[index - i]) {
        return 'Book not found';
      }  
      if (library[index - i].title === book.title) {
        return library[index - i];
      } 
      if (library[index - i].dewey !== book.dewey) {
        return 'Book not found';
      }
    } 
  } else if (currentBook.dewey > book.dewey) {
    return findBook(book, beginning, index-1);
  } else if (currentBook.dewey < book.dewey) {
    return findBook(book, index+1, end);
  }
};

console.log(findBook({ author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' }));