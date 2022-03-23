/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
export const Error = () => {
  return (
    <div>
      <h1 className='text-center'>404</h1>
      <h2 className='text-center'>Something went wrong :(</h2>;
      <div className='d-flex justify-content-center'>
        <Link to='/' className='btn btn-primary'>
          Back to home
        </Link>
      </div>
    </div>
  );
};

