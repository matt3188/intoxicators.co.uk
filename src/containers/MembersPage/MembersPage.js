import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import './MembersPage.css';

const MembersPage = props => (
  <Container>
    <Row className="show-grid">
      <Col xs={6} md={4}>
        <img src="images/slider-01.jpg" className="members-picture" alt="" />
        <h1>Members name</h1>
      </Col>
      <Col xs={6} md={4}>
        <img src="images/slider-01.jpg" className="members-picture" alt="" />
        <h1>Members name</h1>
      </Col>
      <Col xs={6} md={4}>
        <img src="images/slider-03.jpg" className="members-picture" alt="" />
        <h1>Members name</h1>
      </Col>
      <Col xs={6} md={4}>
        <img src="images/slider-04.jpg" className="members-picture" alt="" />
        <h1>Members name</h1>
      </Col>
      <Col xs={6} md={4}>
        <img src="images/slider-05.jpg" className="members-picture" alt="" />
        <h1>Members name</h1>
      </Col>
      <Col xs={6} md={4}>
        <img src="images/slider-06.jpg" className="members-picture" alt="" />
        <h1>Members name</h1>
      </Col>
    </Row>
  </Container>
);

export default MembersPage;
