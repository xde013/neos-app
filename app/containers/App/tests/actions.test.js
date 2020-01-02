import { LOAD_NEOS, LOAD_NEOS_SUCCESS, LOAD_NEOS_ERROR } from '../constants';

import { loadNeos, neosLoaded, neosLoadingError } from '../actions';

describe('App Actions', () => {
  describe('loadRepos', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_NEOS,
      };

      expect(loadNeos()).toEqual(expectedResult);
    });
  });

  describe('neosLoaded', () => {
    it('should return the correct type and the passed neos', () => {
      const fixture = ['Test'];
      const expectedResult = {
        type: LOAD_NEOS_SUCCESS,
        neos: fixture,
      };

      expect(neosLoaded(fixture)).toEqual(expectedResult);
    });
  });

  describe('repoLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_NEOS_ERROR,
        error: fixture,
      };

      expect(neosLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
