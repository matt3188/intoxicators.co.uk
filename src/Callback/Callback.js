import React, { Component } from 'react';
import loading from './head.png';
import './loading.css';

class Callback extends Component {
  render() {
    return (
      <div className="loading-container">
        <div className="loading">
          <div className="spinner" />
          <img src={loading} alt="loading" className="head" />
        </div>
      </div>
    );
  }
}

export default Callback;
