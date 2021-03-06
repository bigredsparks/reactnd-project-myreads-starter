import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookshelfChanger extends Component {
  static propType = {
    book: PropTypes.object.isRequired,
    onMoveBook: PropTypes.func.isRequired
  }

  changeShelf = (newShelf) => {
    const { book, onMoveBook } = this.props
    book.shelf = newShelf
    onMoveBook(book)
  }

  render() {
    const { book } = this.props
    // books default to the "none" shelf
    return (
      <div className="book-shelf-changer">
      <select
        onChange={(event) => this.changeShelf(event.target.value)}
        value={book.shelf || 'none'}
        >
        <option value="" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
      </div>
    )
  }
}

export default BookshelfChanger
