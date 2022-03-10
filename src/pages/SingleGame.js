/** @format */

import React from 'react';
import { useParams } from 'react-router-dom';

export const SingleGame = () => {
  const { id } = useParams();
  return <div>SingleGame: {id}</div>;
};
