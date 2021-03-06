import React from 'react';

import './TimelineTable.scss';


class TimelineTable extends React.Component {
  render() {
    const { events } = this.props;
    return (
      
      <div className="container">
          <div className="container">
            <table className="responsive-table highlight white-text">
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Date & Time</th>
                  <th>Media</th>
                </tr>
              </thead>

              <tbody>
              {events == null ? [] : events.map((events) =>
                <tr key={events.eventId}>
                  <td>{events.eventName}</td>
                  <td>{events.dateTime}</td>
                  <td><a href={`/content/${events.eventId}`}  className="btn blue darken-1 modal-trigger"><i className="fas fa-play-circle" id={events.eventId} ></i></a></td>
                </tr>
              )}
              </tbody>
            </table>
          </div>

      </div>
    );
  }
}

export default TimelineTable;