import React from 'react';

const BookDetails = () => {
  const books = [
    { id: 1, title: 'React Basics', author: 'Dan Abramov' },
    { id: 2, title: 'Advanced React', author: 'Andrew Clark' }
  ];

  return (
    <div>
      <h2>Book Details</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetails;
