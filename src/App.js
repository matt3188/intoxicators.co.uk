import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "containers/Home";
import Calendar from "containers/Calendar";

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
