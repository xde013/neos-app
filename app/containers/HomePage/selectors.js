/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { makeSelectNeos } from '../App/selectors';

const makeSelectNeosFormatted = () =>
  createSelector(makeSelectNeos, neos => {
    if (neos) {
      return neos.map(neo => [
        neo.name,
        neo.estimated_diameter.kilometers.estimated_diameter_min,
        neo.estimated_diameter.kilometers.estimated_diameter_max,
      ]);
    }
    return [];
  });

export { makeSelectNeosFormatted };
