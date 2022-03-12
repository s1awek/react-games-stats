/** @format */

import React from 'react';
import { useGlobalContext } from '../context/context';
import { Error, Loading, GameBox } from '../components';
export const GamesList = () => {
  const { isLoading, error, data } = useGlobalContext();
  if (isLoading) {
    return <Loading />;
  }
  if (error.show) {
    return <Error />;
  }
  return (
    <div>
      {data.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
};
