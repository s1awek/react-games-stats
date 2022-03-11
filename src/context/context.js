/** @format */

import React, { useContext, useReducer } from 'react';
import { reducer } from '../reducers/reducer';
import { SEARCH } from '../actions/action';

const Context = React.createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer);
  const handleSearch = (term) => {
    dispatch({ type: SEARCH, payload: { term } });
  };
  return <Context.Provider value={{ ...state, handleSearch }}>{children}</Context.Provider>;
};

export const useGlobalContext = () => {
  return useContext(Context);
};
