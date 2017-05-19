import React, { Component } from 'react';
import { Router, Route, browserHistory, history} from 'react-router';
import App from './App.js';

class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Route path="/" component={App}>
                </Route>
            </Router>
        )
    }
}
export default Routes;