import React from 'react';
import ReactDOM from 'react-dom';
import App, { books } from './App';
import './index.css';
import { Router, browserHistory, Route } from 'react-router'
import { Book } from './components/books'


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/book/:id" component={Book} books={books}/>
  </Router>,
  document.getElementById('root')
);
