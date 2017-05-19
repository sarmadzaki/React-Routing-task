import React, { Component } from 'react';
import './App.css';
import Books from './components/books.jsx'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          id: '1',
          title: 'React Quickly',
          src: '',
          // src: `${process.env.PUBLIC_URL}/pro-react.jpg`,
          details: 'React Quickly is a book from Azet Marden'
        },
        {
          id: '2',
          title: 'React Up and Running',
          src: '',
          details: 'React Quickly is a book from Azet Marden'
        },
        {
          id: '3',
          title: 'React Meap',
          src: '',
          details: 'React Quickly is a book from Azet Marden'
        },
        {
          id: '4',
          title: 'Learn React Quickly',
          src: '',
          details: 'React Quickly is a book from Azet Marden'
        }
      ]
    }
  }


  render() {
    return (
      <div>
        <h1>Library</h1>
        <Books books={this.state.books} />
      </div>
    );
  }
}

export default App;
