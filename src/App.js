import React from 'react'
import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'
import './App.css'
import { BrowserRouter, Route, Link } from "react-router-dom";
import SearchBook from "./SearchBook"

class BooksApp extends React.Component {
  state = {
    searchedBooks: [],
    allBooks : [],
  }

  componentDidMount(){
    BooksAPI.getAll().then(val => this.setState({
      allBooks: val
    }))
  }


  updateBook = event => {
    BooksAPI.update({name: event.target.name, id: event.target.id}, event.target.value).then(() => BooksAPI.getAll().then(val => this.setState({
      allBooks: val
    })))

  }


  updateSearch = event => {    
    if(event.target.value === ""){
      this.setState({
        searchedBooks: []
      })
      return
    }

    try{
      BooksAPI.search(event.target.value).then(val => this.setState({
        searchedBooks: val
      }))
    } catch (e) {
      this.setState({
        searchedBooks: []
      })
    }

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
                    <Bookshelf bookshelf_title = "Currently Reading" books = {this.state.allBooks.filter( (book) => book.shelf === "currentlyReading")} update = {this.updateBook} > </Bookshelf>
                    <Bookshelf bookshelf_title = "Books I Want To Read" books = {this.state.allBooks.filter( (book) => book.shelf === "wantToRead")}  update = {this.updateBook}> </Bookshelf>
                    <Bookshelf bookshelf_title = "Books I Have Finished" books = {this.state.allBooks.filter( (book) => book.shelf === "read")} update = {this.updateBook}> </Bookshelf>
                  </div> 
              </div>
            </div>
          )} />

          <Route path='/search' render={() => ( 
            <SearchBook searchedBooks = {this.state.searchedBooks} updateSearch={this.updateSearch} updateBook={this.updateBook}></SearchBook>
          )}/>

          <Link to="/search">
           <div className="open-search">
              <button>Add a book</button>
            </div>
         </Link>


      </BrowserRouter>
      </div> 
    )
  }
}

export default BooksApp
