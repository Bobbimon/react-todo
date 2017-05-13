var Expect = require('expect');
var df = require('deep-freeze-strict');

var Reducers = require('Reducers');

describe ('Reducers', () => {
  describe ('searchTextReducer', () => {
    it ('Should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = Reducers.searchTextReducer(df(''), df(action));

      Expect(res).toEqual(action.searchText);
    });
  });

  describe ('showCompletedReducer', () => {
    it ('Should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var state = false;
      var res = Reducers.showCompletedReducer(df(state), df(action));

      Expect(res).toEqual(!state);
    });
  });

  describe ('todosReducer', () => {
    it ('Should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: '1212',
          text: 'Walk the dog',
          completed: false,
          completedAt: 123123
        }
      };
      var res = Reducers.todosReducer(df([]), df(action));

      Expect(res.length).toEqual(1);
      Expect(res[0]).toEqual(action.todo);
    });

    it ('Should update todo', () => {
      var todos = [{
        id: '12',
        text: 'Hello',
        completed: true,
        createdAt: 123,
        completedAt: 1234
      }];
      var updates = {
        completed: false,
        completedAt: null
      };
      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };
      var res = Reducers.todosReducer(df(todos), df(action));

      Expect(res[0].completed).toEqual(updates.completed);
      Expect(res[0].completedAt).toEqual(updates.completedAt);
      Expect(res[0].text).toEqual(todos[0].text);
    });

    it ('Should add existing todos', () => {
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
      var res = Reducers.todosReducer(df([]), df(action));

      Expect(res.length).toEqual(1);
      Expect(res[0]).toEqual(todos[0]);
    });
  });

  describe('authReducer', () => {
    it ('Should store uid on LOGIN', () => {
      const action = {
        type: 'LOGIN',
        uid: 'qwe123'
      };

      const res = Reducers.authReducer(undefined, df(action));

      Expect(res).toEqual({
        uid: action.uid
      });
    });

    it ('Should store uid on LOGOUT', () => {
      const authData = {
        uid: 'qweqwe231'
      };
      const action = {
        type: 'LOGOUT'
      };

      const res = Reducers.authReducer(df(authData), df(action));

      Expect(res).toEqual({});
    });
  });
});
