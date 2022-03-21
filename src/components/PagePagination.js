/** @format */

import React from 'react';
import { Pagination } from 'react-bootstrap';
import { useGlobalContext } from '../context/context';
import styled from 'styled-components';

export const PagePagination = () => {
  const { page, changePage, data, limit } = useGlobalContext();
  return (
    <Wrapper>
      <Pagination className='justify-content-center'>
        <Pagination.Prev
          disabled={page > 1 ? false : true}
          onClick={() => {
            changePage('prev');
          }}
        />
        <Pagination.Item active>{page}</Pagination.Item>
        <Pagination.Next
          disabled={data.length !== limit ? true : false}
          onClick={() => {
            changePage('next');
          }}
        />
      </Pagination>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  a {
    box-shadow: none;
  }
`;