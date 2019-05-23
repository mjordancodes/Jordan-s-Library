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
    searchQuery: ' ',
  };

  updateQuery = searchQuery => {
    this.setState(() => ({
      searchQuery,
    }));
  };

  render() {
    const { books, searchQuery } = this.state;

    const shownBooks = books.filter(book =>
      book.title.toLowerCase().includes('a')
    );

    console.log('result: ', shownBooks);
    console.log('search: ', searchQuery);

    return (
      <div>
        <Hero />
        <main className="content">
          <SearchForm>
            <label>
              Search:
              <input
                id="search"
                name="search"
                type="text"
                value={searchQuery}
                onChange={event => this.updateQuery(event.target.value)}
              />
            </label>
          </SearchForm>
          <p>{searchQuery}</p>
          <BookList books={books} />
        </main>
      </div>
    );
  }
}

export default Home;
