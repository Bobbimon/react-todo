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
        text: 'Walk the dog'
      };
      var res = Reducers.todosReducer(df([]), df(action));

      Expect(res.length).toEqual(1);
      Expect(res[0].text).toEqual(action.text);
    });

    it ('Should toggle todo', () => {
      var id = '12';
      var completed = true;
      var todos = [{
        id: id,
        text: 'Hello',
        completed: completed,
        createdAt: 123,
        completedAt: 1234
      }];
      var action = {
        type: 'TOGGLE_TODO',
        id: id
      };
      var res = Reducers.todosReducer(df(todos), df(action));

      Expect(res[0].completed).toEqual(!completed);
      Expect(res[0].completedAt).toEqual(undefined);
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
});
