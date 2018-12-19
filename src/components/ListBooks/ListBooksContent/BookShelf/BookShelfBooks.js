import React, { Component } from 'react'
import BooksGrid from '../../../BooksGrid/BooksGrid'

export default class BookShelfBooks extends Component {
  render() {
    return (
      <div className="bookshelf-books">
      <BooksGrid />
    </div>
    )
  }
}
