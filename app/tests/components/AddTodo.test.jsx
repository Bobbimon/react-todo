var React = require('react');
var ReactDOM = require('react-dom');
var Expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import * as Actions from 'Actions';
var {AddTodo} = require('AddTodo');

describe('AddTodo', () => {
  it('Should exist', ()=> {
    Expect(AddTodo).toExist();
  });

  it('Should dispatch ADD_TODO when valid todo text', () => {
    var todoText = 'Do the dishes';
    var action = Actions.startAddTodo(todoText);
    var spy = Expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    Expect(spy).toHaveBeenCalledWith(action);
  });

  it('Should not dispatch ADD_TODO when invalid todo text was entered', () => {
    var spy = Expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);
    Expect(spy).toNotHaveBeenCalled();
  });
});
