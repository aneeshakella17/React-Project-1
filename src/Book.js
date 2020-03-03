import React from 'react';
import './App.css';

class Book extends React.Component{
	render(){
		var authors = []
		if('author' in this.props.book){
			authors = this.props.books.authors
		}
		return (	
			<React.Fragment> 
			   	<li id={this.props.book.title}> 
			        	<div className="book">
			            <div className="book-top">
			            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}></div>
			           	<div className="book-shelf-changer">
			            <select id= {this.props.book.id} name = {this.props.book.name} onChange= {this.props.update}>
			                <option value="move" disabled>Move to...</option>
			                <option value="currentlyReading">Currently Reading</option>
			                <option value="wantToRead">Want to Read</option>
			                <option value="read">Read</option>
			            	<option value="none">None</option>
			            </select>
			             </div>
			            </div>
			            <div className="book-title">{this.props.book.title}</div>
			            <div className="book-authors">{authors.map((author) => <div>{author}</div>)}</div>
			          </div>
			        </li>
			</React.Fragment>
		)
	}
}

export default Book 