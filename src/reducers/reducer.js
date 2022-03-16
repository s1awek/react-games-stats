/** @format */

import { SEARCH, GET_GAMES_BEGIN, GET_GAMES_ERROR, GET_GAMES_SUCCESS, CHANGE_PAGE, GET_SINGLE_GAME_SUCCESS, GET_SINGLE_GAME_BEGIN, GET_SINGLE_GAME_ERROR } from '../actions/action';

export const reducer = (state, action) => {
  if (action.type === SEARCH) {
    const searchTerm = action.payload.searchTerm;
    return { ...state, searchTerm };
  }
  if (action.type === GET_GAMES_BEGIN) {
    //console.log('hello from GET_GAMES_BEGIN');
    return { ...state, areGamesLoading: true };
  }
  if (action.type === GET_SINGLE_GAME_BEGIN) {
    //console.log('hello from GET_SINGLE_GAME_BEGIN');
    return { ...state, isGameLoading: true };
  }
  if (action.type === GET_GAMES_SUCCESS) {
    //console.log('hello from GET_GAMES_SUCCESS)');
    //
    return { ...state, areGamesLoading: false, data: action.payload };
  }
  if (action.type === GET_SINGLE_GAME_SUCCESS) {
    //console.log('hello from GET_SINGLE_GAME_SUCCESS');
    return { ...state, isGameLoading: false, singleData: action.payload };
  }
  if (action.type === GET_GAMES_ERROR) {
    return { ...state, areGamesLoading: false, isGameLoading: false, error: { show: true, msg: action.payload } };
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
