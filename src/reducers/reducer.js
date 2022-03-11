/** @format */

import { SEARCH } from '../actions/action';
const initialState = {
  searchTerm: '',
};
export const reducer = (state = initialState, action) => {
  if ((action.type = SEARCH)) {
    return { ...state };
  }
  return state;
};
