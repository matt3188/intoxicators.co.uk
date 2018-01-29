import React, { Component } from 'react';
import './calendar.css';

import Calendar from 'components/Calendar';
import { Grid, Row, Col } from 'react-bootstrap';

class CalendarPage extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col lg={12}>
            <Calendar />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default CalendarPage;
