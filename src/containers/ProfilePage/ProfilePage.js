import React, { Component } from 'react';
import { Panel, Image } from 'react-bootstrap';
import AuthService from 'utils/AuthService';

import './ProfilePage.css';

class Profile extends Component {
  componentWillMount() {
    this.profile = AuthService.getProfile();
    console.log(this.profile.email_verified);
  }
  render() {
    return (
      <div className="container">
        <div className="profile-area">
          <Panel>
            <Panel.Body>
              <h3>Hi, {this.profile.name}</h3>
              <div className="profile-image-container">
                <Image src={this.profile.picture} className="profile-image" alt="Profile image" circle />
                {this.profile.email_verified && <i className="verified glyphicon glyphicon-ok" />}
              </div>
              <div>
                <p>{this.profile.nickname}</p>
              </div>
            </Panel.Body>
          </Panel>
        </div>
      </div>
    );
  }
}

export default Profile;
