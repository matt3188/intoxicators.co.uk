import request from 'superagent';

const CALENDAR_ID = '361cp6rc7jlcqtv2g4oav684oc@group.calendar.google.com';
const API_KEY = 'AIzaSyABVPNZnuJ7nKtA1MX_Ecn6tR7ult7WlUE';
const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

export function getEvents(callback) {
  request.get(url).end((err, resp) => {
    if (!err) {
      const events = [];
      JSON.parse(resp.text).items.map(event =>
        events.push({
          start: event.start.date || event.start.dateTime,
          end: event.end.date || event.end.dateTime,
          title: event.summary,
        })
      );
      callback(events);
    }
  });
}

export default getEvents;
