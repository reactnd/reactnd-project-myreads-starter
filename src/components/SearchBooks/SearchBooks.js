import React, { Component } from 'react'
import SearchBooksBar from './SearchBooksBar/SearchBooksBar'
import SearchBooksResults from './SearchBooksResults/SearchBooksResults'
import * as BooksAPI from '../../BooksAPI'

export default class SearchBooks extends Component {

state = {
  searchBooks: [],
  searchQuery: '',
}

componentDidMount() {
  BooksAPI.getAll().then(searchBooks => {
    this.setState(() => ({
      searchBooks
    }));
  });
}

updateQuery = query => {
  this.setState(() => ({
    searchQuery: query.trim()
  }))
}

  render() {
    return (
      <div className="search-books">
      <SearchBooksBar updateQuery={this.updateQuery} onNavigation={this.props.onNavigation}/>
      <SearchBooksResults searchBooks={this.state.searchBooks}/>
    </div>
    )
  }
}
