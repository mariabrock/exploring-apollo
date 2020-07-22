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
              {/* {events == null ? [] : events.map((events) => {
                <tr>
                  <td>${event name}</td>
                  <td>${event date}</td>
                </tr>
              } */}
                <tr>
                  <td>placeholder1</td>
                  <td>placeholder2</td>
                </tr>
                <tr>
                  <td>placeholder3</td>
                  <td>placeholder4</td>
                </tr>
              </tbody>
            </table>

          </div>

      </div>
    );
  }
}

export default TimelineTable;