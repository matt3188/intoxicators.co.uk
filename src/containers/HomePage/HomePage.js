import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Grid, Row, Col } from 'react-bootstrap';

import Carousel from 'components/Carousel/Carousel';
import Card from 'components/Card/Card';
import './HomePage.css';

const Home = props => (
  <div className="homepage">
    <Carousel />

    <section>
      <button onClick={() => props.changePage()}>Go to about page via redux</button>
    </section>

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
  </div>
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push('/about-us'),
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(Home);
