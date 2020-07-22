import React from 'react';
import './Timeline.scss';
import TimelineTable from '../../shared/TimelineTable/TimelineTable';
import { getAllEvents } from '../../../helpers/data/eventData';

class Timeline extends React.Component {
  state = {
    events: []
  }

  componentDidMount() {
    this.getAllEvents();
  }

  getAllEvents() {
    getAllEvents()
    .then((result) => this.setState({ events: result.data }))
    .catch((error) => console.error('error getting events info', error));
   }



  render() {
    const { events } = this.state;
    return (
      <div className="container">
        <h1 className="text-white center">Timeline</h1>
        <TimelineTable events={events} />
      </div>
      
    );
  }
}

export default Timeline;