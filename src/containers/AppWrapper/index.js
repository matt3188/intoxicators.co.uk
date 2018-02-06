import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

// Containers
import App from 'containers/App';
import HomePage from 'containers/HomePage';
import CalendarPage from 'containers/CalendarPage';
import MembersPage from 'containers/MembersPage';

// Components
import Header from 'components/Header';
import Footer from 'components/Footer';

import Callback from 'Callback/Callback';
import AuthService from 'Auth/Auth';
import history from '../../history';

const auth = new AuthService();

const handleAuthentication = nextState => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

const AppWrapper = () => (
  <Router history={history} component={App}>
    <div className="app">
      <Header history={history} auth={auth} />
      <Switch>
        <Route exact path="/" render={props => <App auth={auth} {...props} />} />
        <Route path="/home" render={props => <HomePage auth={auth} {...props} />} />
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
