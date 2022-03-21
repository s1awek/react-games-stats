/** @format */

import React from 'react';
import { GamesList } from '../components';
import { Container, Row, Col } from 'react-bootstrap';

export const HomePage = () => {
  return (
    <Container className='home'>
      <Row>
        <Col xs={12}>
          <GamesList />
        </Col>
      </Row>
    </Container>
  );
};
