var React = require('react');

var TodoForm = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var todo = this.refs.todoText.value;
    if (todo.length > 1) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todo);
    }
  },
  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.handleSubmit} className="todo-form">
          <input type="text" ref="todoText" placeholder="Add todo"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = TodoForm;
