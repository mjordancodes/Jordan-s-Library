import React, { Component } from 'react';
import styled from '@emotion/styled';

import Hero from '../components/Hero';
import BookList from '../components/Book-List';

import booksdata from '../books-data';

const SearchForm = styled.aside`
  margin: 25px 0;
  border: 0.5px dashed black;
  padding: 25px;
  label {
    padding: 0 5px;
    > * {
      margin-left: 5px;
    }
  }
`;

class Home extends Component {
  state = {
    shownBooks: booksdata,
    searchQuery: '',
    selectedGenre: 'all',
  };

  updateQuery = searchQuery => {
    this.setState(() => ({
      searchQuery,
      shownBooks: booksdata.filter(
        book =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.first.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.last.toLowerCase().includes(searchQuery.toLowerCase()) ||
          `${book.author.first} ${book.author.last}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
      ),
    }));
  };

  updateGenre = selectedGenre => {
    if (selectedGenre === 'all') {
      this.setState(() => ({
        shownBooks: booksdata,
      }));
    } else {
      this.setState(() => ({
        selectedGenre,
        shownBooks: booksdata.filter(book =>
          book.genre
            .toLowerCase()
            .replace(/[^A-Z0-9]+/gi, '')
            .includes(selectedGenre)
        ),
      }));
    }
  };

  render() {
    const { shownBooks, searchQuery, selectedGenre } = this.state;

    const getGenres = booksdata.map(book => book.genre);
    const genres = [...new Set(getGenres)];

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
                placeholder="title or author"
              />
            </label>
            <label>
              Genre:
              <select
                id="genreSelect"
                defaultValue={selectedGenre}
                onChange={event => this.updateGenre(event.target.value)}
              >
                <option value="all">All</option>
                {genres.map(genre => (
                  <option
                    value={genre.toLowerCase().replace(/[^A-Z0-9]+/gi, '')}
                    key={genre.toLowerCase().replace(/[^A-Z0-9]+/gi, '')}
                  >
                    {genre}
                  </option>
                ))}
              </select>
            </label>
          </SearchForm>
          <BookList books={shownBooks} />
        </main>
      </div>
    );
  }
}

export default Home;
