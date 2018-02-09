import auth0 from 'auth0-js';
import AuthConfig from './auth0-variables';

class Auth {
  auth0 = new auth0.WebAuth({
    domain: AuthConfig.DOMAIN,
    clientID: AuthConfig.CLIENT_ID,
    redirectUri: AuthConfig.REDIRECT_URL,
    // responseType: AuthConfig.RESPONSE_TYPE,
    // scope: AuthConfig.SCOPE,
  });

  // namespace = AuthConfig.NAMESPACE;

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  searchForLogin() {
    if (this.isAuthenticated()) {
      // Execute logic upon entering the application.
    }
  }

  handleAuthentication() {
    return this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        // Save the relevant auth information to localStorage so the user stays logged in
        this.setSession(authResult);
      } else if (err) {
        console.log(err);
      }
    });
  }

  // Custom claims need to be namespaced, so we need to know how to find the key
  // we want.
  // buildMetadateKey() {
  //   return this.namespace + '-user_metadata';
  // }

  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  isAuthenticated() {
    const accessToken = localStorage.getItem('access_token');
    const idToken = localStorage.getItem('id_token');
    const expiresAt = localStorage.getItem('expires_at');

    if (!(accessToken && idToken && expiresAt)) {
      return false;
    }

    return new Date().getTime() < expiresAt;
  }

  getAccessToken() {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('No access token found');
    }
    return accessToken;
  }

  getProfile(cb) {
    let accessToken = this.getAccessToken();
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile;
      }
      cb(err, profile);
    });
  }
}

export default Auth;
