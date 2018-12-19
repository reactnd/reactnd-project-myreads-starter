import React, { PureComponent } from 'react';

import BookShelfTitle from './BookShelfTitle'
import BookShelfBooks from './BookShelfBooks'

export default class BookShelf extends PureComponent {
  render() {
    return (
      <div>
        <div className="bookshelf">
          <BookShelfTitle />
          <BookShelfBooks />
        </div>
      </div>
    );
  }
}
