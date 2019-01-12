import React, { Component } from 'react';
import BooksGrid from '../../BooksGrid/BooksGrid';

export default class SearchBooksResults extends Component {
  render() {
    const { searchBooks } = this.props;
    let tempArr = searchBooks;
    let testResults = !Array.isArray(tempArr) || !tempArr.length;

    return (
      <div className="search-books-results">
        <BooksGrid
          books={searchBooks}
          onHandleShelfChange={this.props.onHandleShelfChange}
        />
        {testResults && <p>No results, please enter a valid search</p>}
      </div>
    );
  }
}
