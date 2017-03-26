var React = require('react');
var ReactDOM = require('react-dom');
var Expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe ('TodoApp', () => {
  it ('Should exist', () => {
    Expect(TodoApp).toExist();
  });

  it ('Should add todo to the todos state on handleAddTodo', () => {
    var todoText = 'Test text';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    Expect(todoApp.state.todos[0].text).toBe(todoText);
  });
});
