var Expect = require('expect');

var TodoAPI = require('TodoAPI');

describe ('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it ('Should exist', () => {
    Expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
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

  describe('getTodos', () => {
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
});
