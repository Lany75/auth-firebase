import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <div id='navigation'>
      <Link to='/' style={{ textDecoration: "none", color: "lightcoral" }}>Accueil</Link>
      <Link to='/inscription' style={{ textDecoration: "none", color: "lightcoral" }}>Inscription</Link>
      <Link to='/connexion' style={{ textDecoration: "none", color: "lightcoral" }}>Connexion</Link>
    </div>
  )
}

export default Navigation;