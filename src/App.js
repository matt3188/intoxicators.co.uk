import React, { Component } from "react";
import logo from "./logo.jpg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="App-section">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-intro">Website coming soon</p>
        </section>
      </div>
    );
  }
}

export default App;
