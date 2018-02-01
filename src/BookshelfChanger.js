import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookshelfChanger extends Component {
  static propType = {
    book: PropTypes.object.isRequired,
    onMoveBook: PropTypes.func.isRequired
  }

  changeShelf = (e) => {
    const { book, onMoveBook } = this.props
    book.shelf = e.target.value
    onMoveBook(book)
  }

  render() {
    const { book } = this.props

    return (
      <div className="book-shelf-changer">
      <select onChange={this.changeShelf} value={book.shelf} >
        <option value="none" disabled>Move to...</option>
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
