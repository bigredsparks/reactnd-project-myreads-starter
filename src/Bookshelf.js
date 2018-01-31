import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const titleFromShelf = {
  currentlyReading : 'Currently Reading',
  wantToRead : 'Want to Read',
  read : 'Read'
}

class Bookshelf extends Component {
  static propType = {
    shelf: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
    onMoveBook: PropTypes.func.isRequired
  }

  render() {
    const { shelf, books, onMoveBook } = this.props
    const shownBooks = books.filter((book) => book.shelf === shelf)
    const bookshelfTitle = titleFromShelf[shelf]

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookshelfTitle}</h2>
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
