import React, { Component } from 'react';
import CloseSearch from './CloseSearch'
import { debounce } from 'throttle-debounce';

export default class SearchBooksBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      searchQuery: ' '
    };

    this.updateSearchQueryDebounced = debounce(500, this.updateSearchQuery);
    this.updateSearchResults = this.props.updateSearchResults
  }


  updateSearchQuery = () => {
    this.setState({
      searchQuery: this.state.inputText,
    })
    this.updateSearchResults(this.state.searchQuery);
  } 

  handleChange = event => {
    this.setState({
      inputText: event.target.value
    });

    this.updateSearchQueryDebounced();
  }

  render() {
    return (
      <div className="search-books-bar">
        <CloseSearch />
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}
