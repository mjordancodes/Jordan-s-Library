/* eslint-disable react/prop-types */
import React from 'react';
import styled from '@emotion/styled';

import BookCard from './Book-Card';

const BookGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 15px;
`;

function BookList({ books }) {
  return (
    <BookGrid>
      {books.map(book => (
        <BookCard book={book} key={book.title} />
      ))}
    </BookGrid>
  );
}

export default BookList;
