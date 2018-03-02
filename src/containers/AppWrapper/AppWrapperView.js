import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { NavbarToggler } from 'reactstrap';

// Containers
import HomePage from 'containers/HomePage/HomePage';
import CalendarPage from 'containers/CalendarPage/CalendarPage';
import MembersPage from 'containers/MembersPage/MembersPage';

// Components
import Navigation from 'components/Navigation/Navigation';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import PageNotFound from 'components/PageNotFound/PageNotFound';

// Utils
import AuthService from 'utils/AuthService';
import DesktopBreakPoint from 'utils/Responsive/DesktopBreakPoint';
import TabletBreakPoint from 'utils/Responsive/TabletBreakPoint';
import PhoneBreakpoint from 'utils/Responsive/PhoneBreakpoint';

class AppWrapperView extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
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

  render() {
    return (
      <div>
        <PhoneBreakpoint>
          <div>
            <Navigation />
            <div className={`app ${this.state.isOpen ? 'menu-open' : ''}`}>
              <NavbarToggler onClick={this.toggle} />

              <Header authService={this.authService} />

              <Route exact path="/" component={HomePage} />
              <Route path="/calendar" component={CalendarPage} />
              <Route path="/members" component={MembersPage} />
              <Route component={PageNotFound} />

              <Footer />
            </div>
          </div>
        </PhoneBreakpoint>

        <TabletBreakPoint>
          <div className={`app ${this.state.isOpen ? 'menu-open' : ''}`}>
            <NavbarToggler onClick={this.toggle} />

            <Header authService={this.authService} />
            <Navigation />

            <Route exact path="/" component={HomePage} />
            <Route path="/calendar" component={CalendarPage} />
            <Route path="/members" component={MembersPage} />
            <Route component={PageNotFound} />

            <Footer />
          </div>
        </TabletBreakPoint>
      </div>
    );
  }
}
export default AppWrapperView;
