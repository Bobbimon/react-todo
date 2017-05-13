var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');

var Actions = require('Actions');
var store = require('ConfigureStore').configure();
import firebase from 'app/firebase/';
import Router from 'app/router/';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(Actions.login(user.uid));
    hashHistory.push('/todos');
  } else {
    store.dispatch(Actions.logout());
    hashHistory.push('/');
  }
});

store.dispatch(Actions.startAddTodos());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!ApplicationStyles')

ReactDOM.render(
  <Provider store={store}>
    {Router}
  </Provider>,
  document.getElementById('app')
);
