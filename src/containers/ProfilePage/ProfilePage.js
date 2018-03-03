import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import AuthService from 'utils/AuthService/AuthService';

import './ProfilePage.css';

class Profile extends Component {
  componentWillMount() {
    this.profile = AuthService.getProfile();
  }
  render() {
    return (
      <div className="container">
        <Card>
          <CardImg src={this.profile.picture} className="profile-image" alt="Profile image" />
          <CardBody>
            <CardTitle>Hi, {this.profile.name}</CardTitle>
            {this.profile.email_verified && <i className="verified glyphicon glyphicon-ok" />}
            <CardText>{this.profile.nickname}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Profile;
