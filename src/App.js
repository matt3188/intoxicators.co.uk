import React, { Component } from "react";
import logo from "./logo.jpg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Calendar from "./Components/Calendar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/calendar" component={Calendar} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
