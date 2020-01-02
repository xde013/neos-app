/*
 * AppReducer
 *
 */

import produce from 'immer';

// The initial state of the App
export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => draft);

export default appReducer;
