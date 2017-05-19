import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, browserHistory, Route } from 'react-router'
import { Book1 } from './components/books.jsx'


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path={'/book/:id'} component={Book1} />
  </Router>,
  document.getElementById('root')
);
