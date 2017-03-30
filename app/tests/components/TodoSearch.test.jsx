var React = require('react');
var ReactDOM = require('react-dom');
var Expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {TodoSearch} from 'TodoSearch';

describe('TodoSearch', () => {
  it ('Should exist', () => {
    Expect(TodoSearch).toExist();
  });

  it ('Should dispatch SET_SEARCH_TEXT on input change', () => {
    var searchText = 'Hej';
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText
    };
    var spy = Expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    Expect(spy).toHaveBeenCalledWith(action);
  });

  it ('Should dispatch SHOW_COMPLETED when checkbox checked', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var spy = Expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    Expect(spy).toHaveBeenCalledWith(action);
  });
});
