import React, { Component } from 'react'

export default class BookTitle extends Component {
  render() {
    return (
      <div className="book-title">{this.props.bookTitle}</div>
    )
  }
}
