/** @format */

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoLogoGithub } from 'react-icons/io5';

export const AboutPage = () => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Wrapper className='py-5'>
            <Card className='mb-2'>
              <Card.Header>About</Card.Header>
              <Card.Body>
                <p>
                  This app was created as a project on which I've been learning{' '}
                  <a target='_blank' rel='noopener nofollow noreferrer' href='https://reactjs.org/'>
                    React
                  </a>
                  .
                </p>
                <p>
                  It uses{' '}
                  <a target='_blank' rel='noopener nofollow noreferrer' href='https://api-docs.igdb.com/'>
                    IGDB API
                  </a>{' '}
                  and is a simplified version of{' '}
                  <a target='_blank' rel='noopener nofollow noreferrer' href='https://www.igdb.com/'>
                    igdb.com
                  </a>{' '}
                  website
                </p>
                <p>
                  You can find the actual code for the app here:{' '}
                  <a target='_blank' rel='noopener nofollow noreferrer' className='icon icon-github' href='https://github.com/s1awek/react-games-stats'>
                    <IoLogoGithub />
                  </a>
                </p>
                <p>
                  You can direct any comments or questions to me via <Link to='/contact'>Contact page</Link>
                </p>
              </Card.Body>
            </Card>
          </Wrapper>
        </Col>
      </Row>
    </Container>
  );
};

const Wrapper = styled.div`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  .icon {
    font-size: 2rem;
  }
`;