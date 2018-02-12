import React from 'react';
import { Route } from 'react-router-dom';

// Containers
import HomePage from 'containers/HomePage/HomePage';
import CalendarPage from 'containers/CalendarPage/CalendarPage';
import MembersPage from 'containers/MembersPage/MembersPage';
import Callback from 'containers/CallbackPage/CallbackPage';

// Components
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import Auth from 'utils/Auth';
import ProtectedRoute from 'utils/ProtectedRoute';

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    Auth.handleAuthentication();
  }
};
const AppWrapper = () => (
  <div className="app">
    <Header />

    <Route exact path="/" component={HomePage} />
    <Route path="/calendar" component={CalendarPage} />
    <Route path="/members" component={MembersPage} />
    <Route
      path="/callback"
      render={props => {
        handleAuthentication(props);
        return <Callback {...props} />;
      }}
    />

    <ProtectedRoute path="/home" component={HomePage} redirectPath="/login" />

    <Footer />
  </div>
);

export default AppWrapper;
