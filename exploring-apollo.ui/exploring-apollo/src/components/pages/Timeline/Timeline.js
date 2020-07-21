import React from 'react';
import './Timeline.scss';
// import { getEventsByMissionId } from '../../../helpers/data/eventData';

class Timeline extends React.Component {
  state = {
    mission: {},
    events: []
  }
  componentDidMount() {

    // getEventsByMissionId()
    //   .then((events) => this.setState({ events }));
  }

  render() {
    const { events } = this.state;
    return (


      <div className="container">
        <h1 className="text-white center">Timeline</h1>
          <div className="container">
            {/* <h4 className ="text-white center">`${mission.Name}`</h4> */}
            <table className="responsive-table striped white-text">
              <thead>
                <tr>
                    <th>Event</th>
                    <th>Date & Time</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>`${events.eventName}`</td>
                  <td>`${events.eventTime}`</td>
                </tr>
                <tr>
                  <td>${}</td>
                  <td>${}</td>
                  <td>${}</td>
                </tr>
                <tr>
                  <td>${}</td>
                  <td>${}</td>
                  <td>${}</td>
                </tr>
              </tbody>
            </table>

          </div>

      </div>
    );
  }
}

export default Timeline;