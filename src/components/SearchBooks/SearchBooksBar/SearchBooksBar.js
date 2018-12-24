import React, { Component } from 'react';
import CloseSearch from './CloseSearch'

export default class SearchBooksBar extends Component {
  render() {
    return (
      <div className="search-books-bar">
        <CloseSearch />
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" onChange={(event) => this.props.updateQuery(event.target.value)} />
        </div>
      </div>
    );
  }
}
