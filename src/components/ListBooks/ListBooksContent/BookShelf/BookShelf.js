import React, { PureComponent } from 'react';

import BookShelfTitle from './BookShelfTitle'
import BookShelfBooks from './BookShelfBooks'

export default class BookShelf extends PureComponent {
  render() {
    return (
      <div>
        <div className="bookshelf">
          <BookShelfTitle shelveTitle={this.props.shelveTitle}/>
          <BookShelfBooks shelveBooks={this.props.shelveBooks} onHandleShelfChange={this.props.onHandleShelfChange}/>
        </div>
      </div>
    );
  }
}
