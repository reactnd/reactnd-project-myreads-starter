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
  BooksAPI.search(query).then(searchBooks => {
    this.setState(() => ({
      searchBooks
    }));
  }).catch(err => console.error('Caught error: ', err));
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
