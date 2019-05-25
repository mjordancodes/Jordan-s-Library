import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Nav from '../components/Nav';
import BookList from '../components/Book-List';

import booksdata from '../books-data';

class BookDetails extends Component {
  render() {
    const { location } = this.props;

    const booksByAuthor = booksdata.filter(book =>
      `${book.author.first
        .toLowerCase()
        .replace(/[^A-Z0-9]+/gi, '-')}-${book.author.last
        .toLowerCase()
        .replace(/[^A-Z0-9]+/gi, '-')}`.includes(location.search.slice(1))
    );

    return (
      <div>
        <Nav />
        <h1>
          Books By: {booksByAuthor[0].author.first}{' '}
          {booksByAuthor[0].author.last}
        </h1>
        <BookList books={booksByAuthor} />
      </div>
    );
  }
}

BookDetails.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
    key: PropTypes.string,
  }).isRequired,
};

export default BookDetails;
