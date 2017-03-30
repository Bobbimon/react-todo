var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var Expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var ConfigureStore = require('ConfigureStore');
var TodoApp = require('TodoApp');
import TodoList from 'TodoList';

describe ('TodoApp', () => {
  it ('Should exist', () => {
    Expect(TodoApp).toExist();
  });

  it ('Should render todo list', () => {
    var store = ConfigureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    );

    var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    Expect(todoList.length).toEqual(1);
  });
});
