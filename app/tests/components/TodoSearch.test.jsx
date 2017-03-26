var React = require('react');
var ReactDOM = require('react-dom');
var Expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it ('Should exist', () => {
    Expect(TodoSearch).toExist();
  });

  it ('Should call onSearch if seach text is changed', () => {
    var searchText = 'Hej';
    var spy = Expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    Expect(spy).toHaveBeenCalledWith(false, searchText);
  });

  it ('Should call onSearch with proper checked value', () => {
    var showCompleted = true;
    var spy = Expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.refs.showCompleted.checked = showCompleted;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    Expect(spy).toHaveBeenCalledWith(showCompleted, '');
  });
});
