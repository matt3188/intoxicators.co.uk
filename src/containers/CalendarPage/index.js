import React from 'react';
import './calendar.css';

import Calendar from 'components/Calendar';
import { Grid, Row, Col } from 'react-bootstrap';

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
