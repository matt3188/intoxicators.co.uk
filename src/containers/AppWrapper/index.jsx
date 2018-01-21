import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Containers
import HomePage from 'containers/HomePage';
import CalendarPage from 'containers/CalendarPage';

// Components
import Header from 'components/Header';
import Footer from 'components/Footer';

const AppWrapper = () => (
  <BrowserRouter>
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/calendar" component={CalendarPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppWrapper;
