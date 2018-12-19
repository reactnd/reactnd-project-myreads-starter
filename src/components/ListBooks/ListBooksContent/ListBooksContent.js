import React, { Component } from 'react';
import BookShelf from './BookShelf/BookShelf';

export default class ListBooksContent extends Component {
  render() {
    return (
      <div className="list-books-content">
        <BookShelf />
      </div>
    );
  }
}
