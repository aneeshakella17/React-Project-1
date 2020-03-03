import React from 'react'
import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'
import './App.css'
import { BrowserRouter, Route, Link } from "react-router-dom";
import SearchBook from "./SearchBook"

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    selectedValue : "",
    allBooks : [],
  }

  componentDidMount(){
    BooksAPI.getAll().then(val => this.setState({
      allBooks: val
    }))
  }




  toUpdate = event => {
    BooksAPI.update({id: event.target.name}, event.target.value)
    BooksAPI.getAll().then(val => this.setState({
      allBooks: val
    }))
  }



  render() {  
    return (
      <div className="app">
      <BrowserRouter>

        <Route exact path='/' render={() => ( 
          <div className="list-books">
            
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            

            <div className="list-books-content">
              
                <div> 
                  <Bookshelf bookshelf_title = "Currently Reading" books = {this.state.allBooks.filter( (book) => book.shelf === "currentlyReading")} update = {this.toUpdate} > </Bookshelf>
                  <Bookshelf bookshelf_title = "Books I Want To Read" books = {this.state.allBooks.filter( (book) => book.shelf === "wantToRead")}  update = {this.toUpdate}> </Bookshelf>
                  <Bookshelf bookshelf_title = "Books I Have Finished" books = {this.state.allBooks.filter( (book) => book.shelf === "read")} update = {this.toUpdate}> </Bookshelf>
                </div> 
            </div>
          </div>
        )} />

        <Route exact path='/search' render={() => ( 
          <SearchBook></SearchBook>
        )} />

      </BrowserRouter>
      </div> 
    )
  }
}

export default BooksApp
