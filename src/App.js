import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="topnav">
          <Link to="/"><span>Home</span></Link>
          <span>&nbsp; &nbsp; &nbsp;</span>
          <Link to="/Timer"><span>Timer</span></Link>
          <span>&nbsp; &nbsp; &nbsp;</span>

          <Link to="/Todo"><span>Todo</span></Link>
        </div>
        <div className="App-header">



          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

      </div>
    );
  }
}

export default App;
