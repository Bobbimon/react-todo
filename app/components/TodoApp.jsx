import React from 'react';
import * as Redux from 'react-redux';
import AddTodo from 'AddTodo';
import TodoList from 'TodoList';
import TodoSearch from 'TodoSearch';
import * as Actions from 'Actions';

export var TodoApp = React.createClass({
  onLogout (e) {
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(Actions.startLogout());
  },
  render () {
    return (
      <div>
        <div className="page-actions">
          <a href="#" onClick={this.onLogout}>Logout</a>
        </div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="columns small-11 medium-6 large-5 small-centered">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Redux.connect()(TodoApp);
