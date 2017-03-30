var React = require('react');
var {connect} = require('react-redux');
var Moment = require('moment');
var Actions = require('Actions');

export var Todo = React.createClass({
  render: function () {
    var {id, completed, completedAt, createdAt, text, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + Moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    }
    return (
      <div className={todoClassName} onClick={() => {
        dispatch(Actions.toggleTodo(id));
        }}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }
});

export default connect()(Todo);
