/** @format */

import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context/context';
import { Loading, Error } from '../components';
import { bodyString } from '../utils/constants';

export const SingleGamePage = () => {
  const { isGameLoading, error, fetchGames, singleData } = useGlobalContext();
  let { id } = useParams();
  id = Number(id.split('-').at(-1));
  const body = bodyString; 
  
  useEffect(() => {
    fetchGames({ body, endpoint: 'games', isGameLoading: true}, 'single', id);
  }, [id]);
  if (isGameLoading) return <Loading />;
  if (error.show) return <Error />;
  return <div><h2>{singleData[0].name}</h2>SingleGame id: {id}</div>;
};;
