import React from 'react';
import { FcCurrencyExchange } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <Link to="/">
      <div className="navbar">
        <FcCurrencyExchange className="icon" />
        <h1 className="navbar-title">
          Smart <span className="coin">Coin</span>
        </h1>
      </div>
    </Link>
  );
};

export default Navbar;
