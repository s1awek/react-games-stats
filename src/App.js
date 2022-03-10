/** @format */
import React from 'react';
import { Header, Footer, Sidebar } from './components';
import { Home, SingleGame } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Row>
          <Col lg={4}>
            <Sidebar />
          </Col>
          <Col lg={8}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/games/:id' element={<SingleGame />} />
            </Routes>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Router>
  );
};


export default App;
