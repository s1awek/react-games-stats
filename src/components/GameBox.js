/** @format */

import React from 'react';
import styled from 'styled-components';
import { LinkWrapper } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import placeholder from '../assets/img/game-placeholder.jpg';

export const GameBox = ({ game }) => {
  const { cover, name } = game;

  console.log(game);
  return (
    <Wrapper>
      <Link to={`/games/${game.slug}-${game.id}`}>
        <img src={cover?.url ? cover.url.replace('thumb', 'cover_big') : placeholder} alt={name} />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  a {
    display: block;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
