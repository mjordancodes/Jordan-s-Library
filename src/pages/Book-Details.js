import React, { Component } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Nav from '../components/Nav';

import booksdata from '../books-data';

const Page = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  img {
    width: 100%;
    max-width: 300px;
    display: block;
    margin: auto;
  }
  @media (min-width: 400px) {
    grid-template-columns: 1fr 2fr;
  }
`;

const Info = styled.div`
  header {
    margin: 35px 0;
    text-align: center;
    h3 {
      font-weight: normal;
    }
  }
`;

class BookDetails extends Component {
  render() {
    const { location } = this.props;

    const shownBook = booksdata
      .filter(book =>
        book.title
          .toLowerCase()
          .replace(/[^A-Z0-9]+/gi, '-')
          .includes(location.search.slice(1))
      )
      .shift();

    const slug = `${shownBook.author.first
      .toLowerCase()
      .replace(
        /[^A-Z0-9]+/gi,
        '-'
      )}-${shownBook.author.last.toLowerCase().replace(/[^A-Z0-9]+/gi, '-')}`;

    return (
      <div>
        <Nav />
        <Page>
          <img src={shownBook.cover} alt={`Cover of ${shownBook.title}`} />

          <Info>
            <header>
              <h2>
                {shownBook.title}
                <br />
                <Link to={`/author/?${slug}`}>
                  {shownBook.author.first} {shownBook.author.last}
                </Link>
              </h2>
              {shownBook.series && (
                <h3>
                  Book {shownBook.series.order} in {shownBook.series.series}
                </h3>
              )}
            </header>
            <ul>
              <li>Genre: {shownBook.genre}</li>
              <li>Pages:{shownBook.pages}</li>
              {shownBook.read ? (
                <li>Status: Read</li>
              ) : (
                <li>
                  {shownBook.dates ? (
                    <span>Status: Reading({shownBook.dates[0].start})</span>
                  ) : (
                    <span>Status: Want to Read</span>
                  )}
                </li>
              )}
            </ul>
          </Info>
        </Page>
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
