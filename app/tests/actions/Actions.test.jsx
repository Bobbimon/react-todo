var Expect = require('expect');

var Actions = require('Actions');

describe('Actions', () => {
  it ('Should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };
    var res = Actions.setSearchText(action.searchText);

    Expect(res).toEqual(action);
  });

  it ('Should generate toggle show completed action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var res = Actions.toggleShowCompleted();

    Expect(res).toEqual(action);
  });

  it ('Should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'Thing to do'
    };
    var res = Actions.addTodo(action.text);

    Expect(res).toEqual(action);
  });

  it ('Should generate add todos action object', () => {
    var todos = [{
      id: '111',
      text: 'anything',
      completed: false,
      completedAt: undefined,
      createdAt: 3300
    }];
    var action = {
      type: 'ADD_TODOS',
      todos
    };
    var res = Actions.addTodos(todos);

    Expect(res).toEqual(action);
  });

  it ('Should generate toggle todo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 1
    };
    var res = Actions.toggleTodo(action.id);

    Expect(res).toEqual(action);
  });
});
