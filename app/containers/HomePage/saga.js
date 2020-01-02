/**
 * Gets the NEOs from NASA API
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_NEOS } from 'containers/App/constants';
import { neosLoaded, neosLoadingError } from 'containers/App/actions';
import request from 'utils/request';

/**
 * NEOS request/response handler
 */
export function* getNeos() {
  const requestURL = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=xLHhDdEiuN5tOg1Z3VnrUkXsBQQv6KHBjbZdIbcX`;

  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(request, requestURL);
    yield put(neosLoaded(data.near_earth_objects));
  } catch (err) {
    yield put(neosLoadingError(err));
  }
}

/**
 * Root saga
 */
export default function* neosData() {
  yield takeLatest(LOAD_NEOS, getNeos);
}
