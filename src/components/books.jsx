import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router';

export const Book1 = (props) => {
    // const id = props.books.map((res, i) => {
    //    return console.log(res.details);
    // })
    // const id =props.params.id;
    console.log(props.params.id);
    return <b>
    </b>
}
class Books extends Component {
    render() {
        return (
            <div>
                {this.props.books.map((book, i) => {
                    return <p key={i}>
                        <Link to={`/book/${i}`}>{book.title}</Link>
                        {/*{console.log(i)}*/}
                        <Book1 books={this.props.books} index={this.props.i} />
                    </p>
                })}
            </div>
        )
    }
}
export default Books;