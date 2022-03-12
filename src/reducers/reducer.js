/** @format */

import { SEARCH, GET_GAMES_BEGIN, GET_GAMES_ERROR, GET_GAMES_SUCCESS } from '../actions/action';

export const reducer = (state, action) => {
  if (action.type === SEARCH) {
    const searchTerm = action.payload.searchTerm;
    return { ...state, searchTerm };
  }
  if (action.type === GET_GAMES_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === GET_GAMES_ERROR) {
    return { ...state, isLoading: false, error: action.payload };
  }
  if (action.type === GET_GAMES_SUCCESS) {
    return { ...state, isLoading: false, data: action.payload };
  }
  return state;
};
