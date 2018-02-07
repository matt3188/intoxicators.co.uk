import React from 'react';
import loading from './head.png';
import './CallbackPage.css';

const Callback = () => (
  <div className="loader-container">
    <div className="loader">
      <div className="spinner" />
      <img src={loading} alt="loading" className="head" />
    </div>
  </div>
);

export default Callback;
