import React from 'react';
import loading from './head.png';
import styles from './CallbackPage.css';

const Callback = () => (
  <div className="loader-container">
    <div className="loader">
      <div className="spinner" />
      <img src={loading} alt="loading" className={styles.head} />
    </div>
  </div>
);

export default Callback;
