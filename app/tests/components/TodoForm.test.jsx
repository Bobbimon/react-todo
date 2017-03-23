var React = require('react');
var ReactDOM = require('react-dom');
var Expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoForm = require('TodoForm');

describe('TodoForm', () => {
  it('Should exist', ()=> {
    Expect(TodoForm).toExist();
  });

  it('Should call onAddTodo if valid todo was entered', () => {
    var spy = Expect.createSpy();
    var todoForm = TestUtils.renderIntoDocument(<TodoForm onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoForm));

    todoForm.refs.todo.value = 'Do the dishes';
    TestUtils.Simulate.submit($el.find('form')[0]);
    Expect(spy).toHaveBeenCalledWith('Do the dishes');
  });

  it('Should not call onAddTodo if invalid todo was entered', () => {
    var spy = Expect.createSpy();
    var todoForm = TestUtils.renderIntoDocument(<TodoForm onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoForm));

    todoForm.refs.todo.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);
    Expect(spy).toNotHaveBeenCalled();
  });
});
