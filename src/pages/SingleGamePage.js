/** @format */

import React from 'react';
import { useParams } from 'react-router-dom';

export const SingleGamePage = () => {
  let { id } = useParams();
  id = Number(id.split('-').at(-1));
  return <div>SingleGame id: {id}</div>;
};
