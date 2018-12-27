import React, { Component } from 'react'

export default class BookAuthors extends Component {



  render() {
    const {bookAuthors} = this.props
    return (
      <div className="book-authors">{bookAuthors}</div>
    )
  }
}
