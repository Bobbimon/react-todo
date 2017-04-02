import ConfigureMockStore from 'redux-mock-store';
import Thunk from 'redux-thunk';
var Expect = require('expect');

import fireBase, {firebaseRef} from 'app/firebase/'
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

  it ('Should generate update todo action', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: '12',
      updates : {completed: false}
    };
    var res = Actions.updateTodo(action.id, action.updates);

    Expect(res).toEqual(action);
  });

  describe ('Tests with firebase todos', () => {
    var testTodoRef;

    beforeEach((done) => {
      var todosRef = firebaseRef.child('todos');

      todosRef.remove().then(() => {
        testTodoRef = firebaseRef.child('todos').push();

        return testTodoRef.set({
          text: 'Something to do',
          completed: false,
          createdAt: 1231231
        });
      }).then(() => done())
      .catch(done)
    });

    afterEach((done) => {
      testTodoRef.remove().then(() => done());
    });

    it ('Should toogle todo and dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({});
      const action = Actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        Expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key,
        });
        Expect(mockActions[0].updates).toInclude({
          completed: true
        });
        Expect(mockActions[0].updates.completedAt).toExist();
        done();
      }, done)
    });

    it ('Should populate todos and dispatch ADD_TODOS', (done) => {
      const store = createMockStore({});
      const action = Actions.startAddTodos();

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        Expect(mockActions[0].type).toEqual('ADD_TODOS');
        Expect(mockActions[0].todos.length).toEqual(1);
        Expect(mockActions[0].todos[0].text).toEqual('Something to do');
        done();
      }, done)
    });
  });
});
