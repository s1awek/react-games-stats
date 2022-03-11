/** @format */

import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col xs={12}>
            <p className='text-center'>Footer</p>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.footer``;
