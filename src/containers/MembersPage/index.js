import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import './members.css';

const MembersPage = () => (
  <Grid>
    <Row className="show-grid">
      <Col xs={6} md={4}>
        <Image src="images/slider-01.jpg" className="members-picture" circle responsive />
        <h1>Members name</h1>
      </Col>
      <Col xs={6} md={4}>
        <Image src="images/slider-01.jpg" className="members-picture" circle responsive />
        <h1>Members name</h1>
      </Col>
      <Col xs={6} md={4}>
        <Image src="images/slider-03.jpg" className="members-picture" circle responsive />
        <h1>Members name</h1>
      </Col>
      <Col xs={6} md={4}>
        <Image src="images/slider-04.jpg" className="members-picture" circle responsive />
        <h1>Members name</h1>
      </Col>
      <Col xs={6} md={4}>
        <Image src="images/slider-05.jpg" className="members-picture" circle responsive />
        <h1>Members name</h1>
      </Col>
      <Col xs={6} md={4}>
        <Image src="images/slider-06.jpg" className="members-picture" circle responsive />
        <h1>Members name</h1>
      </Col>
    </Row>
  </Grid>
);

export default MembersPage;
