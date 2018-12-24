import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import SearchBooks from './components/SearchBooks/SearchBooks';
import ListBooks from './components/ListBooks/ListBooks';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {

    libraryBooks: []
  };

  componentWillMount() {
    BooksAPI.getAll().then(libraryBooks => {
      this.setState(() => ({
        libraryBooks
      }));
    });
  }

  updateLibrary = () => {
    BooksAPI.getAll().then(libraryBooks => {
      this.setState(() => ({
        libraryBooks
      }));
    });
  };

  onHandleShelfChange = (book, shelf) => {
    event.preventDefault();
    let tmpBook = book;
    tmpBook.shelf = shelf;
    let tmpBooks = this.state.libraryBooks;
    let tmpBooks2 = tmpBooks.filter(b => {
      return b.id !== book.id;
    });
    let tmpBooks3 = tmpBooks2.concat(tmpBook);

    this.setState(() => ({
      libraryBooks: tmpBooks3
    }));

    BooksAPI.update(book, shelf);
  };

  onNavigation = () => {
    this.setState({
      showSearchPage: !this.state.showSearchPage
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks
              libraryBooks={this.state.libraryBooks}
              onHandleShelfChange={this.onHandleShelfChange}
            />
          )}
        />

        <Route
          path="/search"
          render={() => (
            <SearchBooks
              onHandleShelfChange={this.onHandleShelfChange}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
