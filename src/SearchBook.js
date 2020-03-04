import React from 'react';
import Bookshelf from './Bookshelf'
import {Link } from "react-router-dom";

class SearchBook extends React.Component{
  render() {
      var searchedBooks = []
      if( !("error" in this.props.searchedBooks)){
        searchedBooks = this.props.searchedBooks
      } 

      searchedBooks.forEach(book => {
      this.props.allBooks.forEach(myBook => {
        if (myBook.id === book.id) {
          book.shelf = myBook.shelf;
        } else { book.shelf = 'none' }
      });
    });

    return (
          <div className="search-books">
            <div className="search-books-bar">
                
              <Link to="/" className="close-search">
               </Link>

              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={this.props.updateSearch}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                <Bookshelf bookshelf_title = "Results" books = {searchedBooks} update = {this.props.updateBook} > </Bookshelf>
              </ol>
            </div>
          </div> 
    );
  }
}

export default SearchBook

