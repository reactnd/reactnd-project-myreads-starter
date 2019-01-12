import React, { Component } from 'react';
import SearchBooksBar from './SearchBooksBar/SearchBooksBar';
import SearchBooksResults from './SearchBooksResults/SearchBooksResults';
import * as BooksAPI from '../../BooksAPI';

export default class SearchBooks extends Component {
  state = {
    searchBooks: []
  };

  updateSearchResults = query => {
    BooksAPI.search(query)
      .then(searchBooks => {
        searchBooks.forEach(element => {
          element.shelf = 'none';
          this.props.libraryBooks.map(lb => {
            if (lb.id === element.id) {
              element.shelf = lb.shelf;
            }
          });
        });
        this.setState(() => ({
          searchBooks
        }));
      })
      .catch(err => console.error('Caught error: ', err));
  };

  render() {
    return (
      <div className="search-books">
        <SearchBooksBar updateSearchResults={this.updateSearchResults} />
        <SearchBooksResults
          searchBooks={this.state.searchBooks}
          onHandleShelfChange={this.props.onHandleShelfChange}
        />
      </div>
    );
  }
}
