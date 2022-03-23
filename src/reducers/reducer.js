/** @format */

import {
  SEARCH_BEGIN,
  SEARCH_SUCCESS,
  SEARCH_HANDLER,
  GET_GAMES_BEGIN,
  GET_GAMES_ERROR,
  GET_GAMES_SUCCESS,
  CHANGE_PAGE,
  GET_SINGLE_GAME_SUCCESS,
  GET_SINGLE_GAME_BEGIN,
  GET_SINGLE_GAME_ERROR,
  SEARCH_MODAL_HANDLER,
  SET_ERROR,
  SET_LOADING,
} from '../actions/action';

export const reducer = (state, action) => {
  if (action.type === SEARCH_MODAL_HANDLER) {
    return { ...state, isSearchLoading: false, isSearchOpen: false, searchData: [], searchTerm: '' };
  }
  if (action.type === SEARCH_HANDLER) {
    const searchTerm = action.payload.searchTerm;
    return { ...state, searchTerm };
  }
  if (action.type === SEARCH_BEGIN) {
    if (!state.searchTerm.length) {
      return { ...state, isSearchLoading: false, isSearchOpen: false, searchData: [], searchTerm: '' };
    }
    return { ...state, isSearchLoading: true };
  }
  if (action.type === SEARCH_SUCCESS) {
    //console.log(action.payload);
    let tempIsSearchOpen = false;
    if (action.payload.length) {
      tempIsSearchOpen = true;
    }
    return { ...state, isSearchLoading: false, searchData: action.payload, isSearchOpen: tempIsSearchOpen };
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
    return { ...state, areGamesLoading: false, isSearchLoading: false, isGameLoading: false, gamesError: { show: true, msg: action.payload } };
  }
  if (action.type === GET_SINGLE_GAME_ERROR) {
    return { ...state, areGamesLoading: false, isSearchLoading: false, isGameLoading: false, singleGameError: { show: true, msg: action.payload }, singleData: [] };
  }
  if (action.type === SET_ERROR) {
    return { ...state, [action.payload.type]: action.payload.error };
  }
  if (action.type === SET_LOADING) {
    const { type, bool } = action.payload;
    return { ...state, [type]: bool };
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
