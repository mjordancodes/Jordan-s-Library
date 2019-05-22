/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import styled from '@emotion/styled';

import Hero from '../components/Hero';
import BookList from '../components/Book-List';

import booksdata from '../books-data';

const SearchForm = styled.aside`
  margin: 25px 0;
`;

class Home extends Component {
  state = {
    books: booksdata,
  };

  render() {
    const { books } = this.state;
    return (
      <div>
        <Hero />
        <main className="content">
          <SearchForm>
            <label>
              Search:
              <input id="search" name="search" type="text" />
            </label>
          </SearchForm>
          <BookList books={books} />
        </main>
      </div>
    );
  }
}

export default Home;
