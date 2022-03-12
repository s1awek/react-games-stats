/** @format */

import React, { useContext, useReducer } from 'react';
import { GamesList } from '../components';
import { useGlobalContext } from '../context/context';

export const HomePage = () => {
  return <GamesList />;
};
