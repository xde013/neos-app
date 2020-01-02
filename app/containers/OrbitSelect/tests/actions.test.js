import { setFilter } from '../actions';
import { SET_FILTER } from '../constants';

describe('OrbitSelect actions', () => {
  describe('Set Action', () => {
    it('should set a filter', () => {
      const fixture = 'Test';
      const expected = {
        type: SET_FILTER,
        filter: fixture,
      };
      expect(setFilter(fixture)).toEqual(expected);
    });
  });
});
