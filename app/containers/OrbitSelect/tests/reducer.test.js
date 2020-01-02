import produce from 'immer';
import orbitSelectReducer, { initialState } from '../reducer';
import { SET_FILTER } from '../constants';
/* eslint-disable default-case, no-param-reassign */
describe('orbitSelectReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(orbitSelectReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle setFilter', () => {
    const action = {
      type: SET_FILTER,
      filter: 'Test',
    };
    const expectedResult = produce(state, draft => {
      draft.filter = action.filter;
    });
    expect(orbitSelectReducer(state, action)).toEqual(expectedResult);
  });
});
