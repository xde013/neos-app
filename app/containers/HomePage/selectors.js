/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { makeSelectOrbitFilter } from '../OrbitSelect/selectors';
import { makeSelectNeos } from '../App/selectors';

const makeSelectNeosFiltered = createSelector(
  [makeSelectNeos, makeSelectOrbitFilter()],
  (neos, orbitFilter) => {
    if (neos) {
      switch (orbitFilter) {
        case false:
        case '':
          return neos;
        default:
          return neos.filter(neo => {
            const orbits = neo.close_approach_data.map(
              obj => obj.orbiting_body,
            );
            return orbits.includes(orbitFilter);
          });
      }
    }
    return [];
  },
);

const makeSelectNeosFormatted = () =>
  createSelector(makeSelectNeosFiltered, neos => {
    if (neos) {
      return neos.map(neo => [
        neo.name,
        neo.estimated_diameter.kilometers.estimated_diameter_min,
        neo.estimated_diameter.kilometers.estimated_diameter_max,
      ]);
    }
    return [];
  });

export { makeSelectNeosFiltered, makeSelectNeosFormatted };
