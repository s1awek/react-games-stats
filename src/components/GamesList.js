/** @format */

import React from 'react';
import { useGlobalContext } from '../context/context';
import { Error, Loading, GameBox, PagePagination } from '../components';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
export const GamesList = () => {
  const { areGamesLoading, gamesError: error, data } = useGlobalContext();
  if (error.show) {
    return <Error />;
  }
  return (
    <Wrapper className='main'>
      {areGamesLoading && (
        <LoadingWrap>
          <Loading />
        </LoadingWrap>
      )}
      <Row className={`games-row gy-5${areGamesLoading ? ' loading' : ''}`}>
        {data.map((game) => {
          return (
            <Col lg={4} key={game.id}>
              <GameBox game={game} />
            </Col>
          );
        })}
        {data.length > 0 && (
          <Col xs={12}>
            <PagePagination />
          </Col>
        )}
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .games-row {
    position: relative;
    &.loading {
      &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: block;
        background-color: rgba(255, 255, 255, 0.5);
        z-index: 99;
      }
    }
  }
`;

const LoadingWrap = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
