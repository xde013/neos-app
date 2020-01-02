/*
 *
 * OrbitSelect reducer
 *
 */
import produce from 'immer';
import { SET_FILTER } from './constants';

export const initialState = {
  filter: '',
};

/* eslint-disable default-case, no-param-reassign */
const orbitSelectReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_FILTER:
        draft.filter = action.filter;
        break;
    }
  });

export default orbitSelectReducer;
