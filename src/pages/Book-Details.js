import React, { Component } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

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
  ul li span {
    font-weight: bold;
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
                {shownBook.author.first} {shownBook.author.last}
              </h2>
              {shownBook.series && (
                <h3>
                  Book {shownBook.series.order} in {shownBook.series.series}
                </h3>
              )}
            </header>
            <ul>
              <li>
                <span>Genre: </span> {shownBook.genre}
              </li>
              <li>
                <span>Pages: </span> {shownBook.pages}
              </li>
              {shownBook.isRead || shownBook.dates ? (
                <li>
                  <span>Status:</span> Read
                </li>
              ) : (
                <li>
                  <span>Status:</span> Want to Read
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
