import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Carousel from 'components/Carousel/Carousel';
import Card from 'components/Card/Card';
import './HomePage.css';

const HomePage = () => (
  <div className="homepage">
    <Carousel />

    <Grid>
      <Row className="show-grid">
        <Col sm={6} md={4}>
          <Card title="Upcoming events" image="images/logo.jpg" linkTo="/calendar" />
        </Col>
        <Col sm={6} md={4}>
          <Card title="Our Members" image="images/slider-03.jpg" linkTo="/members" />
        </Col>
        <Col sm={6} md={4}>
          <Card title="Join the club" image="images/slider-04.jpg" linkTo="/join" />
        </Col>
      </Row>
    </Grid>
  </div>
);

export default HomePage;
