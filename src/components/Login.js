import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from '../firebase';
import 'firebase/auth';
import './Login.css';

const Login = () => {
  const [formMode, setFormMode] = useState('login');
  const navigate = useNavigate();

  const handleFormModeChange = (mode) => {
    setFormMode(mode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    navigate('/'); // Replace '/dashboard' with the appropriate destination after login/sign-up
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider);
      navigate('/dashboard'); // Replace '/dashboard' with the appropriate destination after login
    } catch (error) {
      // Handle error
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>{formMode === 'login' ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          {formMode === 'sign-up' && (
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">{formMode === 'login' ? 'Login' : 'Sign Up'}</button>
        </form>
        <div className="form-switch">
          <span>
            {formMode === 'login'
              ? "Don't have an account?"
              : 'Already have an account?'}
          </span>
          <button onClick={() => handleFormModeChange(formMode === 'login' ? 'sign-up' : 'login')}>
            {formMode === 'login' ? 'Sign Up' : 'Login'}
          </button>
        </div>
        <div className="google-button" onClick={handleGoogleLogin}>
          <div className="google-button-icon">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="46px"
              height="46px"
              viewBox="0 0 46 46"
            >
              <path
                fill="#4285F4"
                d="M38.429,20.104c0-1.381-0.124-2.716-0.361-3.995h-17.07v7.568h9.451c-0.396,2.175-1.614,4.013-3.438,5.238v4.351h5.559c3.25-2.998,5.116-7.429,5.116-12.162"
              ></path>
              <path
                fill="#34A853"
                d="M20,38.429c4.63,0,8.533-1.518,11.343-4.131l-5.559-4.351c-1.544,1.037-3.522,1.643-5.784,1.643-4.446,0-8.199-3.014-9.548-7.084h-5.68v4.447c2.872,5.624,8.827,9.387,15.489,9.387"
              ></path>
              <path
                fill="#FBBC05"
                d="M10.452,23.548c-0.16-0.475-0.246-0.98-0.246-1.503s0.086-1.028,0.246-1.503v-4.447h-5.68c-0.854,2.536-1.337,5.265-1.337,8.134s0.483,5.598,1.337,8.134l5.68-4.448"
              ></path>
              <path
                fill="#EB4335"
                d="M20,7.571c2.534,0,4.801,0.871,6.605,2.566l4.982-4.983C28.531,2.211,24.628,0,20,0C12.838,0,7.126,5.097,7.126,11.429c0,2.453,0.835,4.698,2.221,6.473l5.68,4.447c1.346-4.07,5.101-7.084,9.548-7.084"
              ></path>
            </svg>
          </div>
          <span>Continue with Google</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
