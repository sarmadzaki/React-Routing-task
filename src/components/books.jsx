import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router';
import '../bootstrap.css'

export const Book = (props) => {
  let id = props.params.id;
  const books = props.route.books
  let id2 = books.filter((obj) => {
    return obj.id == id;
  })
  console.log(id2[0].details)
  return (
    <div className="col-sm-6">
      <img src={id2[0].src} alt="" height="200"/>
      <h1>{id2[0].title}</h1>
      <hr/>
      <h6><b>Auther Name: </b>{id2[0].auther}</h6>
      <p>{id2[0].details}
        <a href={id2[0].download}>Download From Here</a>
      </p>
      <Link to="/" className="btn btn-primary">Go Back</Link>
    </div>
  )
}
class Books extends Component {
  render() {
    return (
      <div>
        {this.props.books.map((book, i) => {
          return <p key={i}>
            <Link to={`/book/${i}`}>{book.title}</Link>
          </p>
        })}
      </div>
    )
  }
}
export default Books;