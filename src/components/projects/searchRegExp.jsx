import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';

class SearchRegExp extends Component {
  state = {
    checked: false,
      inputChar: '',
      bookNumbers: [{
        bookImg: 'https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/Poetry.jpg'
      }, {
        bookImg: 'https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/lakeOfDark.jpg'
      }, {
        bookImg: 'https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/VirtualReality.jpg'
      }]
  }

  render() {
    const { inputChar, checked, bookNumbers } = this.state
    let bookInfo = null;
    if (inputChar)  {
      const match = new RegExp(escapeRegExp(inputChar), 'i')    // reg exp finds pattern to match side pane places with search box
      bookInfo = bookNumbers.filter(
        (book) => match.test(book[0])
      )
    } else {
      bookInfo = bookNumbers
    }

    return (
      <div className="grid-x ">

        <input onClick={() => this.setState({checked: !checked})} type="checkbox" checked={checked} id="nav-trigger" className="nav-trigger" />
        {bookInfo.map((book, i) =>
          <img alt={`book${i}`} src={book.bookImg} className="cell large-3 medium-4 small-3" />
        )}
      </div>
    )
  }
}

export default SearchRegExp
