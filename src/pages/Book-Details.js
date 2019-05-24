/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import booksdata from '../books-data';

class BookDetails extends Component {
  render() {
    const { location } = this.props;
    const bookMatch = location.search.slice(1);
    const bookDetails = booksdata.filter(book =>
      book.title
        .toLowerCase()
        .replace(/[^A-Z0-9]+/gi, '-')
        .includes(bookMatch)
    );
    const shownBook = bookDetails[0];
    return (
      <div>
        <img src={shownBook.cover} alt={`Cover of ${shownBook.title}`} />
        <header>
          <h2>
            {shownBook.title}
            <br />
            {shownBook.author.first} {shownBook.author.last}
          </h2>
          {shownBook.series && (
            <h3>
              Book {shownBook.series.order} in {shownBook.series.series}
            </h3>
          )}
        </header>
        <div className="book-info">
          <ul>
            <li>
              <span>Genre: </span> {shownBook.genre}
            </li>
            <li>
              <span>Pages: </span> {shownBook.pages}
            </li>
            {shownBook.isRead || shownBook.dates ? (
              <li>Status: Read</li>
            ) : (
              <li>Status: Want to Read</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default BookDetails;
