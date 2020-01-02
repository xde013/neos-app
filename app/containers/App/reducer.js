/*
 * AppReducer
 *
 */

import produce from 'immer';
import { LOAD_NEOS_SUCCESS, LOAD_NEOS, LOAD_NEOS_ERROR } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  userData: {
    neos: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_NEOS:
        draft.loading = true;
        draft.error = false;
        break;

      case LOAD_NEOS_SUCCESS:
        draft.userData.neos = action.neos;
        draft.loading = false;
        break;

      case LOAD_NEOS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;
