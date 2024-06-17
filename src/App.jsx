import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Header from './components/Header';
import backgroundImage from './assets/favela .jpeg';

const App = () => {
  return (
    <div className='app'>
    <div style={{ backgroundImage: `url(${backgroundImage})` }} className='background' />
      <Header />
      <HomePage />
      <Footer />
  
    </div>
  );
};

export default App;
