var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');
var Actions = require('Actions');
var store = require('ConfigureStore').configure();
var TodoAPI = require('TodoAPI');

store.dispatch(Actions.startAddTodos());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!ApplicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
