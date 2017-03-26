var Expect = require('expect');

var TodoAPI = require('TodoAPI');

describe ('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it ('Should exist', () => {
    Expect(TodoAPI).toExist();
  });

  describe ('setTodos', () => {
    it ('Should set valid todos array', () => {
      var todos = [{
        id: 23,
        text: 'Test all files',
        completed: false
      }];
      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      Expect(actualTodos).toEqual(todos);
    });

    it ('Should not set invaid todos array', () => {
      var badTodos = {a: 'b'};
      TodoAPI.setTodos(badTodos);

      Expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe ('getTodos', () => {
    it ('Should return empty array for bad localStorage data', () => {
      var actualTodos = TodoAPI.getTodos();

      Expect(actualTodos).toEqual([]);
    });

    it ('Should return todo if valid array in localStorage', () => {
      var todos = [{
        id: 23,
        text: 'Test all files',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos();

      Expect(actualTodos).toEqual(todos);
    });
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
