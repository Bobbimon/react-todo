import ConfigureMockStore from 'redux-mock-store';
import Thunk from 'redux-thunk';
var Expect = require('expect');

var Actions = require('Actions');

var createMockStore = ConfigureMockStore([Thunk]);

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
      todo: {
        id: '1212',
        text: 'Walk the dog',
        completed: false,
        completedAt: 0
      }
    };
    var res = Actions.addTodo(action.todo);

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

  it ('Should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = 'My todo item';

    store.dispatch(Actions.startAddTodo(todoText)).then(() => {
      const Actions = store.getActions();
      Expect(Actions[0]).toInclude({
        type: 'ADD_TODO'
      });
      Expect(Actions[0].todo).toInclude({
        text: todoText
      });
      done();
    }).catch(done);
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
