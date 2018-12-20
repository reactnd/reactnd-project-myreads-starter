import React, { Component } from 'react';
import Book from './Book/Book';

export default class BooksGrid extends Component {
  state = {
    books: []
  };

  componentWillReceiveProps = props => {
    let booksArr = [];
    for (let book in props.books) {
      booksArr.push(props.books[book]);
    }
    this.setState(() => ({
      books: booksArr
    }));
  };

  render() {
    return (
      <ol className="books-grid">
        {this.state.books.map((book, index) => (
          <li key={index}>
            <Book book={book} onHandleShelfChange={this.props.onHandleShelfChange}/>
          </li>
        ))}
      </ol>
    );
  }
}
