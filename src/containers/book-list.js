import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookList extends Component {
	renderList() {
		console.log(this.props.book);
		return this.props.book.map((book) => {
			<li key={book.title} className="list-group-item">
				{book.title}
			</li>
		})
	}

	render(){
		return(
			<ul className='list-group col-md-4'>
				{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state) {
	//special name. whatever this returns will be set as this.props above
	//
	return {
		books: state.books
	};
}

export default connect(mapStateToProps)(BookList);