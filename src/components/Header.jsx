import React from 'react';
import './Header.css';
import Album from '../assets/Album.JPG';

const Header = () => {
  return (
    <header className="header">
      <img src={Album} alt="Album Cover" />
      <h1>MC Jefynho RV - CARRO CHEFE</h1>
      <p>Escolhe a sua plataforma de musica</p>
    </header>
  );
};

export default Header;
