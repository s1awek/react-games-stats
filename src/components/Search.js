/** @format */

import React, { useEffect, useRef } from 'react';
import { useGlobalContext } from '../context/context';
import { Form, FormControl } from 'react-bootstrap';
import { searchString } from '../utils/constants';
import styled from 'styled-components';
import coverPlaceholder from '../assets/img/cover-placeholder.png';
import { Link } from 'react-router-dom';
import { variables } from '../scss/variables';
export const Search = () => {
  const { handleSearch, searchTerm, searchData, fetchGames, isSearchLoading, isSearchOpen, handleSearchModal } = useGlobalContext();
  const searchForm = useRef(null);
  useEffect(() => {
    fetchGames({ body: searchString, endpoint: 'games', isSearchLoading: true }, 'search');
    // eslint-disable-next-line
  }, [searchTerm]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isSearchOpen && searchForm.current && !searchForm.current.contains(e.target)) {
        handleSearchModal();
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
    // eslint-disable-next-line
  }, [isSearchOpen]);

  return (
    <Wrapper ref={searchForm}>
      <Form className='d-flex'>
        <FormControl type='search' placeholder='Search' className='me-2' aria-label='Search' value={searchTerm} onChange={handleSearch} />
      </Form>
      {isSearchOpen && (
        <div className={`search-dropdown position-absolute ${isSearchLoading ? 'loading' : ''}`}>
          <ul className='list-unstyled py-2 px-1' onClick={handleSearchModal}>
            {searchData.map((item, index) => {
              const { name, first_release_date, cover, id, slug } = item;
              return (
                <li className='d-flex w-100 mb-2' key={index}>
                  <Link className='d-flex w-100' to={`/games/${slug}-${id}`}>
                    <div className='dropdown-col-1 me-2'>
                      <img src={cover?.url || coverPlaceholder} alt='' />
                    </div>
                    <div className='dropdown-col-2 d-flex flex-column justify-content-center'>
                      <h4 className='name'>{name}</h4>
                      {first_release_date && <span className='released'>{new Date(first_release_date * 1000).getFullYear()}</span>}
                    </div>
                  </Link>
                </li>
              );
            })}
            {searchData?.length >= 50 && <li>More...</li>}
          </ul>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  li {
    border: 1px solid #eee;
    transition: ${variables.transition};
    &:hover {
      border-color: #aaa;
    }
  }
  .search-dropdown {
    top: 100%;
    right: 7px;
    width: 400px;
    z-index: 99;
    background-color: #fff;
    max-height: 200px;
    overflow: auto;
    @media screen and (max-width: 991px) {
      right: unset;
      left: 0;
    }
    @media screen and (max-width: 450px) {
      right: 7px;
      width: auto;
    }
    h4 {
      font-size: 13px;
      text-transform: uppercase;
      margin-bottom: 0;
      color: #343434;
    }
    &.loading {
      &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: block;
        z-index: 2;
        background-color: rgba(255, 255, 255, 0.5);
      }
    }
    .dropdown-col-2 {
      span {
        font-size: 13px;
        opacity: 0.8;
        color: #343434;
      }
    }
  }
`;
