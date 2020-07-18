import React from 'react';
import './Timeline.scss';

class Timeline extends React.Component {

  componentDidMount() {

  }

  render() {
    return (

      <div className="container">
        <h1 className="text-white center">Timeline</h1>
          <div className="container">
            <table className="responsive-table striped white-text">
              <thead>
                <tr>
                    <th>Event</th>
                    <th>Date & Time</th>
                    <th>Description</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Alvin</td>
                  <td>Eclair</td>
                  <td>$0.87</td>
                </tr>
                <tr>
                  <td>Alan</td>
                  <td>Jellybean</td>
                  <td>$3.76</td>
                </tr>
                <tr>
                  <td>Jonathan</td>
                  <td>Lollipop</td>
                  <td>$7.00</td>
                </tr>
              </tbody>
            </table>

          </div>

      </div>
    );
  }
}

export default Timeline;