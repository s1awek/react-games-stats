/** @format */

import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context/context';
import { Loading, Error } from '../components';
import { bodyString } from '../utils/constants';
import styled from 'styled-components';
import placeholder from '../assets/img/game-placeholder.jpg';
import { Col, Container, Row } from 'react-bootstrap';

export const SingleGamePage = () => {
  const { isGameLoading, error, fetchGames, singleData } = useGlobalContext();
  let { id } = useParams();
  id = Number(id.split('-').at(-1));
  const body = bodyString;
  useEffect(() => {
    fetchGames({ body, endpoint: 'games', isGameLoading: true }, 'single', id);
  }, [id]);
  if (isGameLoading)
    return (
      <LoadingWrap>
        <Loading />
      </LoadingWrap>
    );
  if (error.show) return <Error />;

  const { name, cover, screenshots, first_release_date, involved_companies } = singleData[0];
  const bgImg = cover?.url?.replace('thumb', '1080p') || screenshots?.url[0]?.replace('thumb', '1080p') || placeholder;
  const coverImg = cover?.url?.replace('thumb', 'cover_big').replace('jpg', 'png') || placeholder;
  //const coverImgObj = cover || placeholder;
  let imgWidth = '274px';
  const getWidth = (width, height, maxHeight) => {
    return Math.floor(maxHeight / (height / width));
  };
  if (cover) {
    imgWidth = getWidth(cover.width, cover.height, 364) + 'px';
  }
  console.log(singleData[0]);
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
                <h4 className='white subtitle'>
                  {new Date(first_release_date).toLocaleString('default', { month: 'short' })}, {new Date(first_release_date).getFullYear()}
                </h4>
                {console.log(involved_companies[0]?.company?.name)}
                <h5 className='white subtitle subtitle--company fst-italic mb-0'>by {involved_companies[0]?.company?.name}</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Wrapper>
  );
};

const LoadingWrap = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.section`
  .top-cover {
    height: 500px;
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
    }
    .col-img {
      display: flex;
      align-items: end;
    }
    .subtitle {
      opacity: 0.85;
    }
  }
`;
