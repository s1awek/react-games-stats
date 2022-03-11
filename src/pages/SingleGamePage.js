/** @format */

import React from 'react';
import { useParams } from 'react-router-dom';

export const SingleGamePage = () => {
  const { id } = useParams();
  return <div>SingleGame: {id}</div>;
};
