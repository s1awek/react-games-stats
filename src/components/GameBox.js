/** @format */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import placeholder from '../assets/img/game-placeholder.jpg';
import { variables } from '../scss/variables';

export const GameBox = ({ game }) => {
  //console.log(game);
  const { cover, name, screenshots } = game;
  return (
    <Wrapper>
      <Link to={`/games/${game.slug}-${game.id}`}>
        <h3 className='h3'>{game.name}</h3>
        <img src={cover?.url ? cover.url.replace('thumb', 'cover_big') : screenshots?.[0] ? screenshots[0].url.replace('thumb', 'cover_big') : placeholder} alt={name} />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 200px;

  h3 {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 14px;
    text-transform: uppercase;
    z-index: 3;
    color: #fff;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 20px;
    background-color: rgba(0, 0, 0, 0.7);
    margin-bottom: 0;
    padding-top: 10px;
  }
  a {
    position: relative;
    display: block;
    height: 100%;
    overflow: hidden;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 2;
      display: block;
      background-color: rgba(0, 0, 0, 0.3);
    }
    &:hover {
      img {
        transform: scale(1.05);
      }
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 1;
    transition: ${variables.transition};
  }
`;
