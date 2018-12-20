import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import SearchBooks from './components/SearchBooks/SearchBooks';
import ListBooks from './components/ListBooks/ListBooks';
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    libraryBooks: []
  };

  componentDidMount() {
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
    })
  }

  onHandleShelfChange = (book, shelf) => {
    event.preventDefault();
    let tmpBook = book;
    tmpBook.shelf = shelf;
    let tmpBooks = this.state.libraryBooks
    let tmpBooks2 = tmpBooks.filter(b => {
      return b.id !== book.id;
    })
    let tmpBooks3 = tmpBooks2.concat(tmpBook)

    this.setState(() => ({
      libraryBooks: tmpBooks3,
    }
    ))

    BooksAPI.update(book, shelf)

    console.log('Bookshelf change sent to local state and API')

    // BooksAPI.update(book, shelf).then(() => {
    //   this.props.onHandleShelfChange
    // })
    // this.updateLibrary()

  }


  onNavigation = () => {
    this.setState({
      showSearchPage: !this.state.showSearchPage
    });
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks onNavigation={this.onNavigation} />
        ) : (
          <ListBooks onNavigation={this.onNavigation} libraryBooks={this.state.libraryBooks} onHandleShelfChange={this.onHandleShelfChange} />
        )}
      </div>
    );
  }
}

export default BooksApp;
