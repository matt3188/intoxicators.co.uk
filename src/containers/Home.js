import logo from "../logo.jpg";
import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <section className="App-section">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-intro">Website coming soon</p>
        </section>
      </div>
    );
  }
}

export default Home;
