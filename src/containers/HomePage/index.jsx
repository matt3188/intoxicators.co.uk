import React, { Component } from 'react';
import Carousel from 'components/Carousel';
import Card from 'components/Card';
import './home.css';

import { Grid, Row, Col } from 'react-bootstrap';

class Home extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div className="homepage">
        <Carousel />
        {isAuthenticated() && (
          <Grid>
            <Row className="show-grid">
              <div className="home">
                <section className="section">
                  <Col sm={6} md={4}>
                    <Card title="Upcoming events" image="images/logo.jpg" linkTo="/calendar" />
                  </Col>
                  <Col sm={6} md={4}>
                    <Card title="Our Members" image="images/slider-03.jpg" linkTo="/calendar" />
                  </Col>
                  <Col sm={6} md={4}>
                    <Card title="Join the club" image="images/slider-04.jpg" linkTo="/calendar" />
                  </Col>
                </section>
              </div>
            </Row>
          </Grid>
        )}
      </div>
    );
  }
}

export default Home;
