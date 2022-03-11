/** @format */

import { SEARCH } from '../actions/action';
const initialState = {
  searchTerm: '',
};
export const reducer = (state = initialState, action) => {
  if (action.type === SEARCH) {
    console.log(action.payload.term);
    return { ...state };
  }
  return state;
};
