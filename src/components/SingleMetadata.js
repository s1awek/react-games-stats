/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SingleMetadata = ({ label, itemsArr }) => {
  console.log();
  return (
    <Wrapper>
      <p className='label'>{label}</p>
      <div className='meta-wrap'>
        {itemsArr.map((item, index) => {
          if (label === 'involved companies') {
            return <span key={index}>{`${item.company.name}${index + 1 < itemsArr.length ? ', ' : ''}`}</span>;
          }
          if (label === 'websites') {
            return (
              <span key={index}>
                <a href={item.url} target='_blank' rel='noopener nofollow noreferrer'>
                  Link
                </a>
                {`${index + 1 < itemsArr.length ? ', ' : ''}`}
              </span>
            );
          }
          if (label === 'similar games') {
            return (
              <span key={index}>
                <Link to={`/games/${item.slug}-${item.id}`}>{item.name}</Link>
                {`${index + 1 < itemsArr.length ? ', ' : ''}`}
              </span>
            );
          }
          return <span key={index}>{`${item.name}${index + 1 < itemsArr.length ? ', ' : ''}`}</span>;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .label {
    margin-bottom: 0;
    text-transform: uppercase;
  }
  .meta-wrap {
    margin-bottom: 2rem;
  }
`;
