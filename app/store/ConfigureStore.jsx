import * as Redux from 'redux';
import Thunk from 'redux-thunk';

var {searchTextReducer, showCompletedReducer, todosReducer} = require('Reducers');

export var configure = (initialState = {}) => {
  var reducer = Redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  var store = Redux.createStore(reducer, initialState, Redux.compose(
    Redux.applyMiddleware(Thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
