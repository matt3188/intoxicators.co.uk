import React, { Component } from 'react';
import loading from './head.png';
import './loading.css';

class Callback extends Component {
  render() {
    return (
      <div className="loading-container">
        <img src={loading} alt="loading" class="loading" />
      </div>
    );
  }
}

export default Callback;
