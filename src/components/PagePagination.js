/** @format */

import React from 'react';
import { Pagination } from 'react-bootstrap';
import { useGlobalContext } from '../context/context';

export const PagePagination = () => {
  const { page, changePage, data, limit } = useGlobalContext();
  return (
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
  );
};
