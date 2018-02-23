import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Containers
import HomePage from 'containers/HomePage/HomePage';
import CalendarPage from 'containers/CalendarPage/CalendarPage';
import MembersPage from 'containers/MembersPage/MembersPage';
import ShopWrapper from 'containers/ShopWrapper/ShopWrapper';

// Components
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import PageNotFound from 'components/PageNotFound/PageNotFound';

import AuthService from 'utils/AuthService';

class AppWrapperView extends Component {
  componentWillMount() {
    this.authService = new AuthService();

    // Add callback for lock's `authenticated` event
    this.authService.lock.on('authenticated', authResult => {
      this.authService.lock.getProfile(authResult.accessToken, (error, profile) => {
        if (error) {
          return this.props.loginError(error);
        }
        AuthService.setToken(authResult.idToken); // static method
        AuthService.setProfile(profile); // static method
        this.props.loginSuccess(profile);
        this.props.history.push({ pathname: '/' });
      });
    });
    // Add callback for lock's `authorization_error` event
    this.authService.lock.on('authorization_error', error => {
      this.props.loginError(error);
      this.props.history.push({ pathname: '/' });
    });
  }

  render() {
    return (
      <div className="app">
        <Header authService={this.authService} />

        <Route exact path="/" component={HomePage} />
        <Route path="/calendar" component={CalendarPage} />
        <Route path="/members" component={MembersPage} />
        <Route path="/shop" component={ShopWrapper} />
        <Route component={PageNotFound} />

        <Footer />
      </div>
    );
  }
}
export default AppWrapperView;
