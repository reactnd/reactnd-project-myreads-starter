import React, { Component } from 'react';
import ListBooksTitle from './ListBooksTitle';
import OpenSearch from './OpenSearch';
import ListBooksContent from './ListBooksContent/ListBooksContent';

export default class ListBooks extends Component {
  render() {
    return (
      <div className="list-books">
        <ListBooksTitle />
        <ListBooksContent libraryBooks={this.props.libraryBooks} onHandleShelfChange={this.props.onHandleShelfChange}/>
        <OpenSearch />
      </div>
    );
  }
}
