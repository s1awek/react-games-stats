/** @format */

import { SEARCH, GET_GAMES_BEGIN, GET_GAMES_ERROR, GET_GAMES_SUCCESS, CHANGE_PAGE } from '../actions/action';

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
    console.log(action.payload);
    return { ...state, isLoading: false, data: action.payload };
  }

  if (action.type === CHANGE_PAGE) {
    let { page, data } = state;
    if (action.payload === 'next') {
      if (data.length === state.limit) {
        page++;
      }
    }
    if (action.payload === 'prev') {
      if (state.page > 1) {
        page = state.page - 1;
      } else {
        page = 1;
      }
    }
    const offset = state.limit * (page - 1);
    return { ...state, page, offset };
  }
  return state;
};
