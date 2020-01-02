/*
 * App Actions
 */

import { LOAD_NEOS, LOAD_NEOS_SUCCESS, LOAD_NEOS_ERROR } from './constants';

export function loadNeos() {
  return {
    type: LOAD_NEOS,
  };
}

export function neosLoaded(neos) {
  return {
    type: LOAD_NEOS_SUCCESS,
    neos,
  };
}

export function neosLoadingError(error) {
  return {
    type: LOAD_NEOS_ERROR,
    error,
  };
}
