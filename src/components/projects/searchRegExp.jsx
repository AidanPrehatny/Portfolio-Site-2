import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';

class SearchRegExp extends Component {
  state = {
      inputChar: '',
      bookNumbers: [{
        bookImg: 'https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/Poetry.jpg',
        bookName: 'The Poetry of A.K. Ramanuian'
      }, {
        bookImg: 'https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/lakeOfDark.jpg',
        bookName: 'The Lake Of Darkness'
      }, {
        bookImg: 'https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/VirtualReality.jpg',
        bookName: 'Virtual Reality'
      }]
  }
  inputDetect = (query) => {
    this.setState({ inputChar: query })
  }

  render() {
    const { inputChar, bookNumbers } = this.state
    let bookInfo = null;
    if (inputChar)  {
      const match = new RegExp(escapeRegExp(inputChar), 'i')    // reg exp finds pattern to match side pane places with search box
      bookInfo = bookNumbers.filter(
        (book) => {
          console.log(book.bookName)
          return (
          match.test(book.bookName)
      )})
    } else {
      bookInfo = bookNumbers
    }

    return (
      <div className="grid-x align-center align-middle">

        <input
            type="text"
            placeholder="Filter Through books"
            value={inputChar}
            onChange={(event) => {
              this.inputDetect(event.target.value)}}
            />
        {bookInfo.map((book, i) =>
          <img key={`book${i}`} alt={`book${i}`} src={book.bookImg} className="cell large-3 medium-4 small-5" style={{height: '220px', padding: '5px 2px '}}/>
        )}
      </div>
    )
  }
}

export default SearchRegExp
