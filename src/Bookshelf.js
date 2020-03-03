import React from 'react';
import './App.css';


class Bookshelf extends React.Component{
	render() {
		return (
		<React.Fragment> 
		<h2 className="bookshelf-title">{this.props.bookshelf_title}</h2>  
        <ol className="books-grid">
			    {this.props.books.map((book) => <li id={book.title}> 
			        	<div className="book">
			            <div className="book-top">
			            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
			           	<div className="book-shelf-changer">
			            <select id= {book.id} name = {book.name} onChange= {this.props.update}>
			                <option value="move" disabled>Move to...</option>
			                <option value="currentlyReading">Currently Reading</option>
			                <option value="wantToRead">Want to Read</option>
			                <option value="read">Read</option>
			            	<option value="none">None</option>
			            </select>
			             </div>
			            </div>
			            <div className="book-title">{book.title}</div>
			            <div className="book-authors">{book.authors.map((author) => <div>{author}</div>)}</div>
			          </div>
			        </li>)}
        </ol> 
        </React.Fragment>
      );
	}
}

export default Bookshelf 