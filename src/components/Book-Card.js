import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 10px;
  p {
    margin: 0;
  }
  img {
    width: 100%;
  }
`;

const Title = styled.span`
  font-size: 1.5em;
`;

class BookCard extends Component {
  render() {
    const { book } = this.props;
    const slug = book.title.toLowerCase().replace(/[^A-Z0-9]+/gi, '-');
    return (
      <Link to={`/book/?${slug}`}>
        <Card>
          <img src={book.cover} alt={`Cover of ${book.title}`} />
          <p>
            <Title>{book.title}</Title>
            <br />
            {`${book.author.first} ${book.author.last}`}
          </p>
        </Card>
      </Link>
    );
  }
}

BookCard.propTypes = {
  book: PropTypes.shape({
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
  }).isRequired,
};
export default BookCard;
