var React = require('react');
var ReactDOM = require('react-dom');
var Expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var {Todo} = require('Todo');

describe ('Todo', () => {
  it ('Should exist', () => {
    Expect(Todo).toExist();
  });

  it ('Should dispatch TOGGLE_TODO action on click', () => {
    var todoData = {
      id: 199,
      text: 'Write todo.test.jsx test',
      completed: true
    };
    var spy = Expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    Expect(spy).toHaveBeenCalledWith({
      type: 'TOGGLE_TODO',
      id: todoData.id
    });
  });
});
