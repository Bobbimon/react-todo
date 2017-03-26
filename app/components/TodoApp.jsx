var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos : [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }, {
          id: 3,
          text: 'Do the dishes'
        }, {
          id: 4,
          text: 'Take a shower'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    alert('new todo: ' + text);
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          <TodoList todos={todos}/>
          <AddTodo onAddTodo={this.handleAddTodo}/>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
