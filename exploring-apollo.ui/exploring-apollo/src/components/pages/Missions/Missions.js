import React from 'react';
import './Missions.scss';
import MissionCard from '../../shared/MissionCard/MissonCard';

class Missions extends React.Component {

  componentDidMount() {

  }

  render() {
    return (

      <div className="container">
        <h1 className="text-white center">Select A Mission</h1>
        <MissionCard />
      </div>
    );
  }
}

export default Missions;