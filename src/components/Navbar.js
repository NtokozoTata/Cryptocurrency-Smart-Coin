import React from 'react';
import { FcCurrencyExchange } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import firebase from '../firebase';
import 'firebase/auth';
import './Navbar.css';

const Navbar = ({ user, handleLogout }) => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo">
        <FcCurrencyExchange className="icon" />
        <h1 className="navbar-title">
          Smart <span className="coin">Coin</span>
        </h1>
      </Link>
      <div className="navbar-buttons">
        {user ? (
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to="/login" className="login-button">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
