import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

// Containers
import HomePage from 'containers/HomePage/HomePage';
import CalendarPage from 'containers/CalendarPage/CalendarPage';
import MembersPage from 'containers/MembersPage/MembersPage';
import Callback from 'containers/Callback/Callback';

// Components
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import AuthService from 'utils/Auth';
import history from '../../history';

const auth = new AuthService();

const handleAuthentication = nextState => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

const AppWrapper = () => (
  <Router history={history}>
    <div className="app">
      <Header history={history} auth={auth} />
      <Switch>
        <Route exact path="/" render={props => <HomePage auth={auth} {...props} />} />
        <Route path="/calendar" render={props => <CalendarPage auth={auth} {...props} />} />
        <Route path="/members" render={props => <MembersPage auth={auth} {...props} />} />
        <Route
          path="/callback"
          render={props => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default AppWrapper;
