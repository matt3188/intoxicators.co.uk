import React, { Component } from 'react';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  render() {
    return <div />;
  }
}

export default App;
