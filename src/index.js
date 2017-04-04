import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Timer from './components/Timer';
import TodoApp from './components/Todo';
import {Router, Route, browserHistory} from 'react-router';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Router path="/Timer" component={Timer}></Router>
    <Router path="/Todo" component={TodoApp}></Router>
  </Router> ,
  document.getElementById('root')
);
