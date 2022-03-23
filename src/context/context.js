/** @format */

import React, { useContext, useEffect, useReducer } from 'react';
import { reducer } from '../reducers/reducer';
import { AUTH_API_ENDPOINT, bodyString } from '../utils/constants';
import {
  GET_GAMES_ERROR,
  GET_GAMES_SUCCESS,
  GET_GAMES_BEGIN,
  SEARCH_BEGIN,
  SEARCH_SUCCESS,
  CHANGE_PAGE,
  GET_SINGLE_GAME_SUCCESS,
  GET_SINGLE_GAME_BEGIN,
  GET_SINGLE_GAME_ERROR,
  SEARCH_HANDLER,
  SEARCH_MODAL_HANDLER,
  SET_ERROR,
  SET_LOADING,
} from '../actions/action';
const Context = React.createContext();

export const Provider = ({ children }) => {
  const initialState = {
    searchTerm: '',
    areGamesLoading: true,
    isGameLoading: true,
    isSearchLoading: true,
    isSearchOpen: false,
    gamesError: { show: false, msg: '' },
    singleGameError: { show: false, msg: '' },
    data: [],
    singleData: [],
    searchData: [],
    limit: 12,
    offset: 0,
    page: 1,
    endpoint: 'games',
    body: bodyString,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    dispatch({ type: SEARCH_HANDLER, payload: { searchTerm } });
  };

  const handleSearchModal = () => {
    dispatch({ type: SEARCH_MODAL_HANDLER });
  };
  const setError = (type, error) => {
    dispatch({ type: SET_ERROR, payload: { type, error } });
  };
  const setLoading = (type, bool = true) => {
    dispatch({ type: SET_LOADING, payload: { type, bool } });
  };
  const fetchGames = async (urlData, type = 'games', id = null) => {
    const { endpoint, body, limit, offset } = urlData;
    let token = '';
    let newBody = `${body} limit ${limit}; offset ${offset};`;
    if (id) {
      newBody = `${body} where id = ${id};`;
    }
    if (type === 'games') {
      dispatch({ type: GET_GAMES_BEGIN });
    }

    if (type === 'single') {
      dispatch({ type: GET_SINGLE_GAME_BEGIN });
    }
    if (type === 'search') {
      dispatch({ type: SEARCH_BEGIN });
      if (state.searchTerm.length) {
        newBody = `fields *, cover.*, themes.*; limit: 50; where name ~ *"${state.searchTerm}"*;`;
      } else {
        return;
      }
    }
    try {
      const response = await fetch(AUTH_API_ENDPOINT, { method: 'POST' });
      if (response.ok) {
        const data = await response.json();
        token = data.access_token;
      }
    } catch (error) {
      dispatch({ type: GET_GAMES_ERROR, payload: error.message });
    }

    if (token.length) {
      try {
        const headers = {
          'Client-ID': process.env.REACT_APP_TWITCH_ID,
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        };
        const config = {
          method: 'POST',
          headers,
          body: newBody,
        };

        const response = await fetch(`/v4/${endpoint}`, config);
        if (!response.ok) {
          if (type === 'games') {
            dispatch({ type: GET_GAMES_ERROR, payload: 'Something went wrong' });
            return;
          }
          if (type === 'single') {
            dispatch({ type: GET_SINGLE_GAME_ERROR, payload: 'Something went wrong' });
            return;
          }
        }
        const data = await response.json();
        if (type === 'games') {
          dispatch({ type: GET_GAMES_SUCCESS, payload: data });
        }
        if (type === 'single') {
          if (data.length === 1) {
            dispatch({ type: GET_SINGLE_GAME_SUCCESS, payload: data });
          } else {
            dispatch({ type: GET_SINGLE_GAME_ERROR, payload: 'Something went wrong' });
          }
        }
        if (type === 'search') {
          dispatch({ type: SEARCH_SUCCESS, payload: data });
        }
      } catch (error) {
        dispatch({ type: GET_GAMES_ERROR, payload: error.message });
      }
    } else {
      dispatch({ type: GET_GAMES_ERROR, payload: 'Something went wrong' });
    }
  };

  const changePage = (type) => {
    dispatch({ type: CHANGE_PAGE, payload: type });
  };

  useEffect(() => {
    fetchGames(state);
    // eslint-disable-next-line
  }, [state.page]);

  return <Context.Provider value={{ ...state, handleSearch, changePage, fetchGames, handleSearchModal, setError, setLoading }}>{children}</Context.Provider>;
};

export const useGlobalContext = () => {
  return useContext(Context);
};
