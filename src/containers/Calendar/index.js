import React, { Component } from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import { getEvents } from 'services/gcal';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css';

// a localizer for BigCalendar
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
