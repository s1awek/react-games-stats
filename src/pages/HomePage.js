/** @format */

import React, { useContext, useReducer, useEffect } from 'react';
import { Sidebar, GamesList } from '../components';
import { Container, Row, Col } from 'react-bootstrap';

export const HomePage = () => {
  return (
    <Container className='home'>
      <Row>
        <Col lg={4}>
          <Sidebar />
        </Col>
        <Col lg={8}>
          <GamesList />
        </Col>
      </Row>
    </Container>
  );
  return;
};
