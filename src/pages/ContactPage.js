/** @format */

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

// For more help visit https://formspr.ee/react-help
export const ContactPage = () => {
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORM_ID);
  if (state.succeeded) {
    return (
      <Container className='py-5'>
        <Row>
          <Col xs={12}>
            <h2 className='text-center'>Thanks for your message! I'll reply as soon as I can.</h2>
          </Col>
        </Row>
      </Container>
    );
  }
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Wrapper>
            <h4 className='mb-4'>To contact me please use contact form below</h4>
            <Form onSubmit={handleSubmit}>
              <Form.Label htmlFor='email'>Email Address</Form.Label>
              <Form.Control id='email' type='email' name='email' className='mb-3' />
              <ValidationError prefix='Email' field='email' errors={state.errors} />
              <Form.Label htmlFor='message'>Your message</Form.Label>
              <Form.Control as='textarea' id='message' name='message' className='mb-3' />
              <ValidationError prefix='Message' field='message' errors={state.errors} />
              <Button type='submit' disabled={state.submitting}>
                Submit
              </Button>
            </Form>
          </Wrapper>
        </Col>
      </Row>
    </Container>
  );
};

const Wrapper = styled.div`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 100px;
  padding-bottom: 100px;
  @media screen and (max-width: 991.92px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
  textarea {
    min-height: 200px;
  }
`;
