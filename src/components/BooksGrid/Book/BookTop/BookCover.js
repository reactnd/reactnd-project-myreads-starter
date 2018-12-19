import React, { Component } from 'react'

export default class BookCover extends Component {
  render() {

    const bookThumbnailURL = this.props.bookThumbnailURL
    return (
      <div
      className="book-cover"
      style={{
        width: 128,
        height: 193,
        backgroundImage: `url("${bookThumbnailURL}")`
      }}
    />
    )
  }
}
