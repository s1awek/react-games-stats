/** @format */
import React, { useState, useEffect } from 'react';
import { Loading } from './components/Loading';

import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import useFetch from './hooks/useFetch';
const App = () => {
  const { isLoading, error, data } = useFetch({ endpoint: 'games', body: 'fields *;' });
  if (isLoading) {
    return <Loading />;
  }
  if (error.show) {
    return <div>Error: {error.msg}</div>;
  }
  if (!error.show & !data) return <Loading />;
  return <div className='test'>my return: {JSON.stringify(data)}</div>;
};


export default App;
