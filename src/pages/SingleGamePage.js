/** @format */

import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context/context';
import { Loading, Error, Rating, Summary, Metadata, Screenshots } from '../components';
import { bodyString } from '../utils/constants';
import styled from 'styled-components';
import placeholder from '../assets/img/game-placeholder.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import { variables } from '../scss/variables';

export const SingleGamePage = () => {
  const { isGameLoading, singleGameError: error, fetchGames, singleData, setError } = useGlobalContext();

  let { id } = useParams();
  id = Number(id.split('-').at(-1));
  const body = bodyString;
  useEffect(() => {
    fetchGames({ body, endpoint: 'games', isGameLoading: true }, 'single', id);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (singleData.length && !singleData[0]?.status) {
      setError('singleGameError', { show: false, msg: '' });
    }
    // eslint-disable-next-line
  }, [singleData]);
  if (isGameLoading)
    return (
      <LoadingWrap>
        <Loading />
      </LoadingWrap>
    );
  if (error.show) return <Error />;
  const { name, cover, screenshots, first_release_date, involved_companies, rating, rating_count } = singleData[0] || {};
  const bgImg = (screenshots?.length && screenshots[0]?.url.replace('thumb', '1080p')) || cover?.url?.replace('thumb', '1080p') || placeholder;
  const coverImg = cover?.url?.replace('thumb', 'cover_big').replace('jpg', 'png') || placeholder;
  let imgWidth = '274px';
  const getWidth = (width, height, maxHeight) => {
    return Math.floor(maxHeight / (height / width));
  };
  if (cover) {
    imgWidth = getWidth(cover.width, cover.height, 364) + 'px';
  }

  return (
    <Wrapper className='single-game'>
      <div className='top-cover position-relative d-flex'>
        <div className='img-wrap absolute'>
          <img src={bgImg} alt={name} className='cover-img object-cover' />
        </div>
        <Container>
          <Row className='align-self-end w-100 h-100 info-row position-relative'>
            <Col className='col-img' md={6}>
              <div className='cover-img-wrap' style={{ width: `${imgWidth}` }}>
                <img src={coverImg} alt={name} className='object-cover' />
              </div>
            </Col>
            <Col md={6}>
              <div className='meta-wrap d-flex flex-column justify-content-end h-100 pb-4'>
                <h1 className='white title mb-4'>{name}</h1>
                {first_release_date ? (
                  <h4 className='white subtitle'>
                    {new Date(first_release_date * 1000).toLocaleString('default', { month: 'short' })}, {new Date(first_release_date * 1000).getFullYear()}
                  </h4>
                ) : (
                  ''
                )}
                {involved_companies ? <h5 className='white subtitle subtitle--company fst-italic mb-0'>by {involved_companies[0]?.company?.name}</h5> : ''}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className='row-content'>
          <Col className='col-content' lg={8}>
            <Summary />
            {screenshots?.length && (
              <div className='mt-4'>
                <Screenshots />
              </div>
            )}
          </Col>
          <Col className='col-rating pt-1' lg={4}>
            <div className='col-rating__inner d-flex mb-3'>
              <RatingWrap>
                <Rating props={{ rating, rating_count }} />
              </RatingWrap>
              {rating_count ? (
                <div className=' d-flex align-items-center'>
                  <p className='mb-0'>
                    Based on <strong>{rating_count}</strong> rating{rating_count === 1 ? '' : 's'}
                  </p>
                </div>
              ) : (
                <div className=' d-flex align-items-center'>
                  <p className='mb-0'>Rating unavailable</p>
                </div>
              )}
            </div>
            <Metadata />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

const LoadingWrap = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RatingWrap = styled.div`
  height: 100px;
  width: 100px;
  margin-right: 1rem;
`;

const Wrapper = styled.section`
  .top-cover {
    height: 500px;
    @media screen and (max-width: 767px) {
      height: auto;
    }
    .img-wrap {
      overflow: hidden;
    }
    .cover-img {
      filter: blur(4px) sepia(0.7) brightness(40%);
    }
    .info-row {
    }
    .cover-img-wrap {
      overflow: hidden;
      position: relative;
      top: 5rem;
      height: 364px;
      @media screen and (max-width: 767px) {
        top: 0;
        margin-bottom: 2rem;
        margin-top: 2rem;
      }
    }
    .col-img {
      display: flex;
      align-items: end;
    }
    .subtitle {
      opacity: 0.85;
    }
  }
  .row-content {
    padding-top: 6rem;
    @media screen and (max-width: 767px) {
      padding-top: 2rem;
    }
  }
  .col-rating {
    p {
      opacity: 0.6;
      font-size: 0.8rem;
      font-weight: 500;
    }
  }
  .col-content {
  }
  .sumary-outer {
    max-height: 148px;
    overflow: hidden;
    transition: ${variables.transition};
  }
`;
