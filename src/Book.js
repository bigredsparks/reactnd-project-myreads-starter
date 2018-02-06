import React from 'react'
import BookshelfChanger from './BookshelfChanger'

const Book = (props) => (
  <div className="book">
  <div className="book-top">
    {(props.book.imageLinks) ?
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("' + props.book.imageLinks.thumbnail + '")' }}></div> :
      <div className="book-cover" style={{ width: 128, height: 193, backgroundColor: 'black' }}></div> 
    }
    <BookshelfChanger
      book={props.book}
      onMoveBook={props.onMoveBook}
    />
    </div>
    <div className="book-title">{props.book.title}</div>
    <div className="book-authors">{props.book.author ? props.book.authors.join(', ') : ''}</div>
  </div>
)

export default Book
