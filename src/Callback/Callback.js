import React, { Component } from 'react';
import loading from './head.png';
import './loader.css';

class Callback extends Component {
  render() {
    return (
      <div className="loader-container">
        <div className="loader">
          <div className="spinner" />
          <img src={loading} alt="loading" className="head" />
        </div>
      </div>
    );
  }
}

export default Callback;
