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
});
