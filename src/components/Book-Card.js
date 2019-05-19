import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

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
    return (
      <Card>
        <img src={book.cover} alt={`Cover of ${book.title}`} />
        <p>
          <Title>{book.title}</Title>
          <br />
          {`${book.author.first} ${book.author.last}`}
        </p>
      </Card>
    );
  }
}

BookCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  book: PropTypes.object.isRequired,
};
export default BookCard;
