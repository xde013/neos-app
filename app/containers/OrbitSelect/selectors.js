/**
 * Direct selector to the orbitSelect state domain
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { makeSelectNeos } from '../App/selectors';

const selectOrbitSelectDomain = state => state.orbitSelect || initialState;

/**
 * specific selectors
 */
const makeSelectOrbitFilter = () =>
  createSelector(selectOrbitSelectDomain, substate => substate.filter);

const makeSelectNeosOrbits = () =>
  createSelector(makeSelectNeos, neos => {
    if (neos) {
      const orbitsMap = new Map();
      neos.forEach(neo => {
        const orbits = neo.close_approach_data;
        orbits.forEach(orbit => {
          const body = orbit.orbiting_body;
          if (!orbitsMap.has(body)) {
            orbitsMap.set(body, body);
          }
        });
      });
      return [...orbitsMap.keys()];
    }
    return [];
  });

export { selectOrbitSelectDomain, makeSelectOrbitFilter, makeSelectNeosOrbits };
