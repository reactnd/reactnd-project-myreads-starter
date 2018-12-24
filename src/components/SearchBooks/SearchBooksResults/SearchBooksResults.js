import React, { Component } from 'react';
import BooksGrid from '../../BooksGrid/BooksGrid';

export default class SearchBooksResults extends Component {
  render() {



    return (
      <div className="search-books-results">
        <BooksGrid books={this.props.searchBooks} onHandleShelfChange={this.props.onHandleShelfChange}/>
      </div>
    );
  }
}
