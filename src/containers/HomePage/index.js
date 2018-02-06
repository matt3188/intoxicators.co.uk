import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Carousel from 'components/Carousel/';
import Card from 'components/Card/';
import './home.css';

class Home extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div className="homepage">
        <Carousel />
        {isAuthenticated() && (
          <Grid>
            <Row className="show-grid">
              <Col sm={6} md={4}>
                <Card title="Upcoming events" image="images/logo.jpg" linkTo="/calendar" />
              </Col>
              <Col sm={6} md={4}>
                <Card title="Our Members" image="images/slider-03.jpg" linkTo="/calendar" />
              </Col>
              <Col sm={6} md={4}>
                <Card title="Join the club" image="images/slider-04.jpg" linkTo="/calendar" />
              </Col>
            </Row>
          </Grid>
        )}
      </div>
    );
  }
}

export default Home;
