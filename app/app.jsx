var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var Actions = require('Actions');
var Store = require('ConfigureStore').configure();

Store.subscribe(() => {
  console.log('New state', Store.getState());
});

Store.dispatch(Actions.addTodo('Do the dishes'));
Store.dispatch(Actions.setSearchText('dish'));
Store.dispatch(Actions.toggleShowCompleted());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!ApplicationStyles')

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
