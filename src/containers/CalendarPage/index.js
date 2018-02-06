import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Calendar from 'components/Calendar';
import './calendar.css';

const CalendarPage = () => {
  return (
    <Grid>
      <Row className="show-grid">
        <Col lg={12}>
          <Calendar />
        </Col>
      </Row>
    </Grid>
  );
};

export default CalendarPage;
