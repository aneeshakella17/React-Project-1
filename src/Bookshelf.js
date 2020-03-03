import React from 'react';
import Book from './Book'
import './App.css';


class Bookshelf extends React.Component{
	render() {
		return (
		<React.Fragment> 
		<h2 className="bookshelf-title">{this.props.bookshelf_title}</h2>  
        <ol className="books-grid">
			    {this.props.books.map((the_book) => 
			    	<Book book={the_book} update={this.props.update}></Book>)} 
        </ol> 
        </React.Fragment> 
      );
	}
}

export default Bookshelf 