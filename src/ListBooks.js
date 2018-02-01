import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'

const bookShelves = [
  "currentlyReading",
  "wantToRead",
  "read"
]

class ListBooks extends Component {
  static propType = {
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
    onMoveBook: PropTypes.func.isRequired
  }

  render() {
    const { books, onMoveBook } = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {bookShelves.map((shelf) => (
              <Bookshelf
                key={shelf}
                shelf={shelf}
                books={books}
                onMoveBook={onMoveBook}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>
    )
  }
}

export default ListBooks
