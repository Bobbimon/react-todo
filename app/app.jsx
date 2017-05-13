var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import TodoApp from 'TodoApp';
var Actions = require('Actions');
var store = require('ConfigureStore').configure();
var TodoAPI = require('TodoAPI');
import Login from 'Login';

store.dispatch(Actions.startAddTodos());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!ApplicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="/todos" component={TodoApp}/>
        <IndexRoute component={Login}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
