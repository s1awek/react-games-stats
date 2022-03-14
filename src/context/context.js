/** @format */

import React, { useContext, useEffect, useReducer } from 'react';
import { reducer } from '../reducers/reducer';
import { GET_GAMES_ERROR, GET_GAMES_SUCCESS, GET_GAMES_BEGIN, SEARCH, CHANGE_PAGE } from '../actions/action';
const Context = React.createContext();
const AUTH_API_ENDPOINT = `https://id.twitch.tv/oauth2/token?client_id=${process.env.REACT_APP_TWITCH_ID}&client_secret=${process.env.REACT_APP_TWITCH_SECRET}&grant_type=client_credentials`;
export const Provider = ({ children }) => {
  const initialState = {
    searchTerm: '',
    isLoading: true,
    error: { show: false, msg: '' },
    data: [],
    limit: 12,
    offset: 0,
    page: 1,
    endpoint: 'games',
    body: 'fields *, cover.*, websites.*, alternative_names.*, external_games.*, game_modes.*, genres.*, involved_companies.company.*, game_engines.*, keywords.*, screenshots.*, release_dates.*, platforms.*, similar_games.*, themes.*,player_perspectives.*,screenshots.*; sort rating asc;',
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    dispatch({ type: SEARCH, payload: { searchTerm } });
  };
  //TODO: Refactor fetching function
  const fetchTwitchData = (gamesURL) => {
    const { endpoint, body, limit, offset } = gamesURL;
    dispatch({ type: GET_GAMES_BEGIN });
    let tempBody = `${body}limit ${limit}; offset ${offset};`;
    fetch(AUTH_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => {
        if (data.ok) return data.json();
        dispatch({ type: GET_GAMES_ERROR, payload: { show: true, msg: 'Something went wrong' } });
        throw new Error('Something went wrong');
      })
      .then((res) => {
        return res.access_token;
      })
      .then(async (token) => {
        const headers = { 'Client-ID': process.env.REACT_APP_TWITCH_ID, 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json', 'Accept': 'application/json' };
        const requestOptions = {
          method: 'POST',
          headers,
          body: tempBody,
        };
        const response = await fetch(`/v4/${endpoint}`, requestOptions);
        if (!response.ok) {
          dispatch({ type: GET_GAMES_ERROR, payload: { show: true, msg: 'Something went wrong' } });
          throw new Error('Something went wrong');
        }
        const data = await response.json();
        dispatch({ type: GET_GAMES_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: GET_GAMES_ERROR, payload: { show: true, msg: error.message } });
      });
  };

  const changePage = (type) => {
    dispatch({ type: CHANGE_PAGE, payload: type });
  };

  useEffect(() => {
    fetchTwitchData(state);
  }, [state.page]);

  return <Context.Provider value={{ ...state, handleSearch, fetchTwitchData, changePage }}>{children}</Context.Provider>;
};

export const useGlobalContext = () => {
  return useContext(Context);
};
