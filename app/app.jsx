var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var Actions = require('Actions');
var Store = require('ConfigureStore').configure();

Store.subscribe(() => {
  console.log('New state', Store.getState());
});

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!ApplicationStyles')

ReactDOM.render(
  <Provider store={Store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
