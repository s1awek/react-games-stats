/** @format */
import React from 'react';
import { Header, Footer } from './components';
import { HomePage, SingleGamePage, ContactPage, ErrorPage, AboutPage } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <section className='header'>
        <Header />
      </section>
      <section className='page'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/games/:id' element={<SingleGamePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </section>
      <Footer />
    </Router>
  );
};


export default App;
