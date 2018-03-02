import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Calendar from 'components/Calendar/Calendar';
import './CalendarPage.css';

const CalendarPage = () => (
  <Container>
    <Row className="show-grid">
      <Col lg={12}>
        <Calendar />
      </Col>
    </Row>
  </Container>
);

export default CalendarPage;
