import React, { Component } from 'react'
import SearchBooksBar from './SearchBooksBar/SearchBooksBar'
import SearchBooksResults from './SearchBooksResults/SearchBooksResults'

export default class SearchBooks extends Component {
  render() {
    return (
      <div className="search-books">
      <SearchBooksBar onNavigation={this.props.onNavigation}/>
      <SearchBooksResults />
    </div>
    )
  }
}
