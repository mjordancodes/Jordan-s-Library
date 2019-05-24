import React, { Component } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import BookCard from './Book-Card';

const BookGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
`;

class BookList extends Component {
  render() {
    const { books } = this.props;
    return (
      <BookGrid>
        {books.map(book => (
          <BookCard book={book} key={book.title} />
        ))}
      </BookGrid>
    );
  }
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      series: PropTypes.shape({
        series: PropTypes.string.isRequired,
        order: PropTypes.number.isRequired,
      }),
      author: PropTypes.shape({
        first: PropTypes.string.isRequired,
        last: PropTypes.string.isRequired,
      }).isRequired,
      cover: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      pages: PropTypes.number.isRequired,
      dates: PropTypes.arrayOf(
        PropTypes.shape({
          start: PropTypes.dates,
          end: PropTypes.dates,
        })
      ),
      isRead: PropTypes.bool,
    }).isRequired
  ).isRequired,
};

export default BookList;
