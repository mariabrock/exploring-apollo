import React from 'react';
import './TimelineTable.scss';


class TimelineTable extends React.Component {

  render() {
    const { events } = this.props;
    return (

      <div className="container">
      <h1 className="text-white center">Timeline</h1>
          <div className="container">
            <table className="responsive-table striped white-text">
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Date & Time</th>
                </tr>
              </thead>

              <tbody>
              {events == null ? [] : events.map((events) =>
                <tr>
                  <td>{events.eventName}</td>
                  <td>{events.eventTime}</td>
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