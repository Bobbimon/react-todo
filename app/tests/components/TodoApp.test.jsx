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
    Expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it ('Should toggle completed value when handleToggle called', () => {
    var todoData = {
      id : 11,
      text: 'Test features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});
    Expect(todoApp.state.todos[0].completed).toBe(false);

    todoApp.handleToggle(todoData.id);
    Expect(todoApp.state.todos[0].completed).toBe(true);
    Expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  it ('Should remove completedAt value when toggling completed to false', () => {
    var todoData = {
      id : 11,
      text: 'Test features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});
    Expect(todoApp.state.todos[0].completed).toBe(false);

    todoApp.handleToggle(todoData.id);
    Expect(todoApp.state.todos[0].completed).toBe(true);
    Expect(todoApp.state.todos[0].completedAt).toBeA('number');

    todoApp.handleToggle(todoData.id);
    Expect(todoApp.state.todos[0].completed).toBe(false);
    Expect(todoApp.state.todos[0].completedAt).toNotExist();
  });
});
