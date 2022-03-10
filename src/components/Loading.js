/** @format */

import React from 'react';
import styled from 'styled-components';

export const Loading = () => {
  return (
    <Wrapper>
      <h2>Loading...</h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 2000;
  h2 {
    position: absolute;
    left: 0;
    right: 0;
    top: calc(50% - 0.5em);
    text-align: center;
  }
`;
