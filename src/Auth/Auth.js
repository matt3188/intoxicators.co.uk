import auth0 from 'auth0-js';

import config from './auth0-variables';
import history from '../history';

export default class AuthService {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: config.AUTH0_DOMAIN,
      clientID: config.AUTH0_CLIENT_ID,
      redirectUri: config.REDIRECT_URL,
      audience: `https://${config.AUTH0_DOMAIN}/userinfo`,
      responseType: 'token id_token',
      scope: 'openid',
    });

    this.login = this.login.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    // this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  isAuthenticated() {
    return AuthService.getToken();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        AuthService.setToken(authResult);
        history.replace('/home');
      } else if (err) {
        history.replace('/home');
        console.log(err);
      }
    });
  }

  static loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = AuthService.getToken();
    return !!token && !AuthService.isTokenExpired(token);
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    history.replace('/home');
  }

  static setToken(idToken) {
    // Saves user token to window.localStorage
    window.localStorage.setItem('id_token', idToken);
  }

  static getToken() {
    // Retrieves the user token from window.localStorage
    return window.localStorage.getItem('id_token');
  }
}
