/** @format */

import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { IoLogoGithub } from 'react-icons/io5';

export const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col xs={12}>
            <div className='footer-inner d-flex align-items-center justify-content-between'>
              <p className='mb-0'>
                Created with{' '}
                <a target='_blank' rel='noopener nofollow noreferrer' href='https://api-docs.igdb.com/'>
                  IGDB API
                </a>{' '}
              </p>
              <p className='mb-0 d-flex'>
                <a
                  target='_blank'
                  rel='noopener nofollow noreferrer'
                  className='icon icon-github ms-2 d-inline-flex align-self-center'
                  href='https://github.com/s1awek/react-games-stats'
                >
                  {' '}
                  <IoLogoGithub />
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  .icon {
    font-size: 2rem;
  }
  background-color: #f1f1f1;
  padding: 1rem 0;
`;
