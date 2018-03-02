import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Containers
import HomePage from 'containers/HomePage/HomePage';
import CalendarPage from 'containers/CalendarPage/CalendarPage';
import MembersPage from 'containers/MembersPage/MembersPage';
import ProfilePage from 'containers/ProfilePage/ProfilePage';

// Components
import Navigation from 'components/Navigation/Navigation';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import PageNotFound from 'components/PageNotFound/PageNotFound';

// Utils
import AuthService from 'utils/AuthService';
import TabletBreakPoint from 'utils/Responsive/TabletBreakPoint';
import PhoneBreakpoint from 'utils/Responsive/PhoneBreakpoint';

import ShadowWrapper from 'utils/ShadowWrapper/ShadowWrapper';
import { FaBars } from 'react-icons/lib/fa/';

class AppWrapperView extends Component {
  constructor() {
    super();

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.props.openMenu();
  }

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

  renderRoutes() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/calendar" component={CalendarPage} />
        <Route path="/members" component={MembersPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route component={PageNotFound} />
      </Switch>
    );
  }

  render() {
    return (
      <ShadowWrapper>
        <PhoneBreakpoint>
          <div>
            <Navigation />
            <div className={`app ${this.props.menuOpen ? 'menu-open' : ''}`}>
              <FaBars onClick={this.toggleNav} />
              <Header authService={this.authService} />

              {this.renderRoutes()}

              <Footer />
            </div>
          </div>
        </PhoneBreakpoint>

        <TabletBreakPoint>
          <div className={`app ${this.props.menuOpen ? 'menu-open' : ''}`}>
            <Header authService={this.authService} />
            <Navigation />

            {this.renderRoutes()}

            <Footer />
          </div>
        </TabletBreakPoint>
      </ShadowWrapper>
    );
  }
}
export default AppWrapperView;
