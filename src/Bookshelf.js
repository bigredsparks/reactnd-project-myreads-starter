import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import * as Constants from './Constants'

class Bookshelf extends Component {
  static propType = {
    shelf: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
    onMoveBook: PropTypes.func.isRequired
  }

  render() {
    const { shelf, books, onMoveBook } = this.props
    const shownBooks = books.filter((book) => book.shelf === shelf)

    return (
      <div className="bookshelf" key={shelf}>
        <h2 className="bookshelf-title">{Constants.ShelfToTitleMap[shelf]}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {shownBooks.map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  onMoveBook={onMoveBook}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf
