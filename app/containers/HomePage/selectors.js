/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { makeSelectNeos } from '../App/selectors';

const makeSelectNeosFormatted = () =>
  createSelector(makeSelectNeos, neos => neos);

export { makeSelectNeosFormatted };
