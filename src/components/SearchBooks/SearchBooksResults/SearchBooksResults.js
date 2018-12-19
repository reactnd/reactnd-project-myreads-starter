import React, { Component } from 'react';
import BooksGrid from '../../BooksGrid/BooksGrid';

export default class SearchBooksResults extends Component {
  render() {



    return (
      <div className="search-books-results">
      {console.log(`test: ${this.props.searchBooks}`) }
        <BooksGrid books={this.props.searchBooks}/>
      </div>
    );
  }
}
