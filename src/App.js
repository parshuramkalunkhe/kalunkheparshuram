import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './views/Home';
import About from './views/About';
import Project from './views/Project';
import Contact from './views/Contact';
import Footer from './components/Footer';
import AboutThisSite from './views/AboutThisSite';
import Cookies from './views/Cookies';

function App() {
  const year = new Date().getFullYear();

  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/about'
              element={<About />}
            />
            <Route
              path='/project'
              element={<Project />}
            />
            <Route
              path='/contact'
              element={<Contact />}
            />
            <Route
              path='/aboutthissite'
              element={<AboutThisSite />}
            />
            <Route
              path='/cookies'
              element={<Cookies />}
            />
          </Routes>
        </main>
        <Footer year={year} />
      </BrowserRouter>
    </>
  );
}

export default App;
