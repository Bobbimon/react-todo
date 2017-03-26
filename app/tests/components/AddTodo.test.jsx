var React = require('react');
var ReactDOM = require('react-dom');
var Expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('Should exist', ()=> {
    Expect(AddTodo).toExist();
  });

  it('Should call onAddTodo if valid todo was entered', () => {
    var spy = Expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = 'Do the dishes';
    TestUtils.Simulate.submit($el.find('form')[0]);
    Expect(spy).toHaveBeenCalledWith('Do the dishes');
  });

  it('Should not call onAddTodo if invalid todo was entered', () => {
    var spy = Expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);
    Expect(spy).toNotHaveBeenCalled();
  });
});
