/**
 * Tests for HomePage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_NEOS } from 'containers/App/constants';
import { neosLoaded, neosLoadingError } from 'containers/App/actions';

import neosData, { getNeos } from '../saga';

/* eslint-disable redux-saga/yield-effects */
describe('getNeos Saga', () => {
  let getNeosGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getNeosGenerator = getNeos();

    const selectDescriptor = getNeosGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();
  });

  it('should dispatch the NeosLoaded action if it requests the data successfully', () => {
    const response = {
      near_earth_objects: [
        {
          name: 'First Neo',
        },
        {
          name: 'Second Neo',
        },
      ],
    };
    const putDescriptor = getNeosGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(neosLoaded(response.near_earth_objects)));
  });

  it('should call the repoLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getNeosGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(neosLoadingError(response)));
  });
});

describe('neosDataSaga Saga', () => {
  const neosDataSaga = neosData();

  it('should start task to watch for LOAD_Neos action', () => {
    const takeLatestDescriptor = neosDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_NEOS, getNeos));
  });
});
