import React, { Component } from 'react';

import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { getEvents } from './gcal';

BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
  }
  componentDidMount() {
    getEvents(events => {
      this.setState({ events });
    });
  }
  render() {
    return <BigCalendar events={this.state.events} />;
  }
}

export default Calendar;
