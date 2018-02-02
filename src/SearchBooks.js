import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
  static propType = {
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
    onMoveBook: PropTypes.func.isRequired
  }

  state = {
    query : '',
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  render() {
    const { books, onMoveBook } = this.props
    const { query } = this.state

    let shownBooks = []
    if ( query ) {
      const pattern = new RegExp(query, 'i')
      shownBooks = books.filter((book) => pattern.test(book.title))
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className='close-search' to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
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

export default SearchBooks
