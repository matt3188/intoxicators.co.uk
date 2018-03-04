import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Icon
import { FaBars } from 'react-icons/lib/fa/';

// Containers
import HomePage from 'containers/HomePage/HomePage';
import CalendarPage from 'containers/CalendarPage/CalendarPage';
import MembersPage from 'containers/MembersPage/MembersPage';
import MemberPage from 'containers/MemberPage/MemberPage';
import ProfilePage from 'containers/ProfilePage/ProfilePage';

// Components
import Navigation from 'components/Navigation/Navigation';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import PageNotFound from 'components/PageNotFound/PageNotFound';

// Utils
import AuthService from 'utils/AuthService/AuthService';
import TabletBreakPoint from 'utils/Responsive/TabletBreakPoint';
import PhoneBreakpoint from 'utils/Responsive/PhoneBreakpoint';
import ShadowWrapper from 'utils/ShadowWrapper/ShadowWrapper';

import MembersData from 'utils/MembersAPI';

class AppWrapperView extends Component {
  constructor(props) {
    super(props);

    // Toggle nav on route change
    this.props.history.listen(location => {
      if (this.props.menuState) {
        this.closeMenu();
      }
    });

    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  componentWillMount() {
    MembersData.init();
    this.members = window.localStorage.getItem('members');

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

  toggleMenu() {
    this.props.toggleMenu();
  }

  closeMenu() {
    this.props.closeMenu();
  }

  renderRoutes() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/calendar" component={CalendarPage} />
        <Route exact path="/members" render={props => <MembersPage members={this.members} />} />
        <Route exact path="/members/:id" render={props => <MemberPage {...props} />} />
        <Route path="/profile" component={ProfilePage} />
        <Route component={PageNotFound} />
      </Switch>
    );
  }

  render() {
    return (
      <ShadowWrapper>
        <PhoneBreakpoint>
          <ShadowWrapper>
            <Navigation clickHandler={this.toggleMenu} />
            <div className={`app ${this.props.menuState ? 'menu-open' : ''}`}>
              <div className="header">
                <Header authService={this.authService} />
                <FaBars className="nav-toggle" width="25" height="25" onClick={this.toggleMenu} />
              </div>

              {this.renderRoutes()}

              <Footer />
            </div>
          </ShadowWrapper>
        </PhoneBreakpoint>

        <TabletBreakPoint>
          <div className={`app ${this.props.menuState ? 'menu-open' : ''}`}>
            <div className="header">
              <Header authService={this.authService} />
            </div>
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
