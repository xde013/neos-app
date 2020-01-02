import produce from 'immer';

import appReducer from '../reducer';
import { loadNeos, neosLoaded, neosLoadingError } from '../actions';
/* eslint-disable default-case, no-param-reassign */
describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      loading: false,
      error: false,
      userData: {
        neos: false,
      },
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadneos action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true;
      draft.error = false;
      draft.userData.neos = false;
    });

    expect(appReducer(state, loadNeos())).toEqual(expectedResult);
  });

  it('should handle the neosLoaded action correctly', () => {
    const fixture = [
      {
        name: 'My neo',
      },
    ];
    const username = 'test';
    const expectedResult = produce(state, draft => {
      draft.userData.neos = fixture;
      draft.loading = false;
    });

    expect(appReducer(state, neosLoaded(fixture, username))).toEqual(
      expectedResult,
    );
  });

  it('should handle the neosLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = produce(state, draft => {
      draft.error = fixture;
      draft.loading = false;
    });

    expect(appReducer(state, neosLoadingError(fixture))).toEqual(
      expectedResult,
    );
  });
});
