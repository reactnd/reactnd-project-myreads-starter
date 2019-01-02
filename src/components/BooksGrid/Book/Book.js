import React, { Component } from 'react';
import BookTitle from './BookTitle';
import BookAuthors from './BookAuthors';
import BookTop from './BookTop/BookTop';

export default class Book extends Component {




  render() {
    const noImageUrl = "https://via.placeholder.com/128x170.png?text=No+Image"
    return (
      <div className="book">
        <BookTop book={this.props.book}
        bookThumbnailURL={(this.props.book["imageLinks"] === undefined ) ? noImageUrl : this.props.book.imageLinks.thumbnail}
        onHandleShelfChange={this.props.onHandleShelfChange} />
        <BookTitle bookTitle={this.props.book.title} />
        <BookAuthors bookAuthors={this.props.book.authors}/>
      </div>
    );
  }
}