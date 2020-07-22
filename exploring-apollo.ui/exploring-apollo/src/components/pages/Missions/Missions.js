import React from 'react';
import './Missions.scss';
import MissionCard from '../../shared/MissionCard/MissonCard';
import { getAllMissions } from '../../../helpers/data/missionData';

class Missions extends React.Component {
  state = {
    mission: []
  }

  componentDidMount() {
    this.getMissions();
 }


 getMissions() {
  getAllMissions()
  .then((result) => this.setState({ mission: result.data }))
  .catch((error) => console.error('error getting mission info', error));
 }

  render() {
    const { mission } = this.state;
    return (

      <div className="container">
        <h1 className="text-white center">Select A Mission</h1>
        {mission == null ? [] : mission.map((mission) => <MissionCard key= {mission.id} mission={mission}/>)} 
      </div>
    );
  }
}

export default Missions;