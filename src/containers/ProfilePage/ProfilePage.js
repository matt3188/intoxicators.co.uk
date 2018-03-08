import React, { Component } from 'react';
import { Container, Col, Row, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import * as AuthService from 'utils/AuthService/AuthService';

import './ProfilePage.css';

class Profile extends Component {
  componentWillMount() {
    this.profile = AuthService.getProfile();
  }
  render() {
    return (
      <Container>
        <Row>
          <Col md={4}>
            <Card>
              <CardImg src={this.profile.picture} className="profile-image" alt="Profile image" />
              <CardBody>
                <CardTitle>Hi, {this.profile.name}</CardTitle>
                {this.profile.email_verified && <i className="verified glyphicon glyphicon-ok" />}
                <CardText>{this.profile.nickname}</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profile;
