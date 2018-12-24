import React, { Component } from 'react'
import SearchBooksBar from './SearchBooksBar/SearchBooksBar'
import SearchBooksResults from './SearchBooksResults/SearchBooksResults'
import * as BooksAPI from '../../BooksAPI'

export default class SearchBooks extends Component {

state = {
  searchBooks: [],
  searchQuery: '',
}

updateSearchResults = query => {
  const maxResults = 5;
  BooksAPI.search(query, maxResults).then(searchBooks => {
    this.setState(() => ({
      searchBooks
    }));
  });
}

updateQuery = query => {
  this.setState(() => ({
    searchQuery: query.trim()
  }))
  this.updateSearchResults(this.state.searchQuery)
}

  render() {
    return (
      <div className="search-books">
      <SearchBooksBar updateQuery={this.updateQuery} />
      <SearchBooksResults searchBooks={this.state.searchBooks} onHandleShelfChange={this.props.onHandleShelfChange}/>
    </div>
    )
  }
}
