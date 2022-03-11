/** @format */

import React from 'react';
import useFetch from '../hooks/useFetch';
import { Loading, Error } from '../components';

export const HomePage = () => {
  const { isLoading, error, data } = useFetch({ endpoint: 'games', body: 'fields *;' });
  if (isLoading) {
    return <Loading />;
  }
  if (error.show) {
    return <Error error={error} />;
  }
  if (!error.show & !data) return <Loading />;
  return <h2>Home</h2>;
};
