/** @format */

import React from 'react';
import { useGlobalContext } from '../context/context';
import { Error, Loading, GameBox } from '../components';
import { Row, Col } from 'react-bootstrap';
export const GamesList = () => {
  const { isLoading, error, data } = useGlobalContext();
  if (isLoading) {
    return <Loading />;
  }
  if (error.show) {
    return <Error />;
  }
  return (
    <main className='main'>
      <Row className='gy-5'>
        {data.map((game) => {
          return (
            <Col lg={4} key={game.id}>
              <GameBox game={game} />
            </Col>
          );
        })}
      </Row>
    </main>
  );
};
