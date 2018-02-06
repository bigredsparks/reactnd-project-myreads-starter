import React from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import * as Constants from './Constants'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  moveBook = (book) => {
    this.setState((prevState) => {

      // update book       
      BooksAPI.update(book, book.shelf)

      // remove moved book from list of books, if it exists
      const newBooks = prevState.books.filter((b) => b.id !== book.id)
      
      // only add book if it is on my shelf
      if (Constants.BookShelves.includes(book.shelf)) {
        newBooks.push(book)
      }

      return { books: newBooks }
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() =>(
          <ListBooks
            books={this.state.books}
            onMoveBook={this.moveBook}
          />
        )}/>
        <Route path='/search' render={({history}) =>(
          <SearchBooks
            books={this.state.books}
            onMoveBook={this.moveBook}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
