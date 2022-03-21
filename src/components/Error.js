/** @format */

import React, { useEffect } from 'react';
import { useGlobalContext } from '../context/context';

export const Error = () => {
  const { error, setError } = useGlobalContext();
  // useEffect(() => {
  //   setError({ show: false, msg: '' });
  // }, []);
  return <h2>Error: {error?.msg}</h2>;
};
