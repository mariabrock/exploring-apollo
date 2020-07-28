import React from 'react';

import './TimelineTable.scss';


class TimelineTable extends React.Component {
  render() {
    const { events } = this.props;
    return (
      
      <div className="container">
          <div className="container">
            <table className="responsive-table white-text">
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
                  <td>{events.eventTime}</td>
                  <td><a href={`/content/${events.eventId}`}  className="floating-btn indigo lighten-2 modal-trigger"><i className="fas fa-play-circle" id={events.eventId} ></i></a></td>
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