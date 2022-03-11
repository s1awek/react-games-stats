/** @format */

import React from 'react';
import { Nav, Navbar, Container, Button, Form, FormControl, Image } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../assets/img/logo.svg';
import { LinkContainer } from 'react-router-bootstrap';
export const Header = () => {
  return (
    <Wrapper>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <Image src={logo} />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: '200px' }} navbarScroll>
              <LinkContainer to='/'>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/contact'>
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
            </Nav>
            <Form className='d-flex'>
              <FormControl type='search' placeholder='Search' className='me-2' aria-label='Search' />
              <Button variant='primary'>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .navbar-brand {
    height: 2rem;
    width: auto;
    padding: 0;
    line-height: 0;
    img {
      height: 100%;
      width: auto;
    }
  }
`;
