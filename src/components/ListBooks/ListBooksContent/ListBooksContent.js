import React, { Component } from 'react';
import BookShelf from './BookShelf/BookShelf';

export default class ListBooksContent extends Component {

state = {
  currentlyReading: [],
  wantToRead: [],
  read: [],
}

componentWillReceiveProps = (props) => {
  this.setState({
    currentlyReading: props.libraryBooks.filter(book => {
      return book.shelf === "currentlyReading"
    }),
    wantToRead: props.libraryBooks.filter(book => {
      return book.shelf === "wantToRead"
    }),
    read: props.libraryBooks.filter(book => {
      return book.shelf === "read"
    }),
  })
}

  render() {
    return (
      <div className="list-books-content">
        <BookShelf shelveTitle='Currently Reading' shelveBooks={this.state.currentlyReading} onHandleShelfChange={this.props.onHandleShelfChange} />
        <BookShelf shelveTitle='Want to Read' shelveBooks={this.state.wantToRead} onHandleShelfChange={this.props.onHandleShelfChange}/>
        <BookShelf shelveTitle='Read' shelveBooks={this.state.read} onHandleShelfChange={this.props.onHandleShelfChange}/>
      </div>
    );
  }
}
