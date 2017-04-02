var Expect = require('expect');

var TodoAPI = require('TodoAPI');

describe ('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it ('Should exist', () => {
    Expect(TodoAPI).toExist();
  });

  describe ('filterTodos', () => {
    var todos = [{
      id: 1,
      text: 'Some text',
      completed: true
    },
    {
      id: 2,
      text: 'Some other text',
      completed: false
    },
    {
      id: 3,
      text: 'Some text here',
      completed: true
    }];

    it ('Should return all items if showCompleted is true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      Expect(filteredTodos.length).toBe(3);
    });

    it ('Should return all todos that\'s not completed', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      Expect(filteredTodos.length).toBe(1);
    });

    it ('Should sort by completed status', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      Expect(filteredTodos[0].completed).toBe(false);
    });

    it ('Should filter todos by searchText', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
      Expect(filteredTodos.length).toBe(3);
    });

    it ('Should return all todos if searchText is empty', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      Expect(filteredTodos.length).toBe(3);
    });
  });
});
