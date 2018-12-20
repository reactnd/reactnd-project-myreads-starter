import React, { Component } from 'react';
import { getImageHeight } from '../../../../utils';

export default class BookCover extends Component {
  render() {
    const bookThumbnailURL = this.props.bookThumbnailURL;

    return (
      <div
        className="book-cover"
        style={{
          width: 128,
          height: getImageHeight(bookThumbnailURL),
          backgroundImage: `url("${bookThumbnailURL}")`
        }}
      />
    );
  }
}
