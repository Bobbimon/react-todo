var Redux = require('redux');
var {searchTextReducer, showCompletedReducer, todosReducer} = require('Reducers');

export var configure = () => {
  var reducer = Redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  var store = Redux.createStore(reducer, Redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
