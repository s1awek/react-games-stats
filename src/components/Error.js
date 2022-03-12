/** @format */

import React from 'react';
import { useGlobalContext } from '../context/context';

export const Error = () => {
  const { error } = useGlobalContext();
  return <h2>Error: {error?.msg}</h2>;
};
