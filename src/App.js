/** @format */
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers/reducer';
import { Header, Footer, Sidebar } from './components';
import { HomePage, SingleGamePage, ContactPage, ErrorPage } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const store = createStore(reducer);
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Container>
          <Row>
            <Col lg={4}>
              <Sidebar />
            </Col>
            <Col lg={8}>
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/games/:id' element={<SingleGamePage />} />
                <Route path='*' element={<ErrorPage />} />
              </Routes>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Router>
    </Provider>
  );
};


export default App;
