import React, { Component } from 'react'
import BooksGrid from '../../../BooksGrid/BooksGrid'

export default class BookShelfBooks extends Component {
  render() {
    return (
      <div className="bookshelf-books">
      <BooksGrid books={this.props.shelveBooks} onHandleShelfChange={this.props.onHandleShelfChange}/>
    </div>
    )
  }
}
