import React from 'react';
import { Link } from 'react-router-dom';
import './MissionCard.scss';

class MissionCard extends React.Component  {
  render() {
    const { mission } = this.props;
    return (

      <div>
        <div className="container">
          <div className="row">
            <div className="col s12 l6">
              <div className="card indigo lighten-5">
                <div className="card-image"><img src={`https://${mission.patchUrl}`} alt={`${mission.missionName} Mission Patch`} /></div>
                <div className="card-content">
                <div className="card-title center black-text">{`${mission.missionName}`}</div>
                  <p className="center black-text">Commander: {mission.commander}</p>
                  <p className="center black-text">Lunar Module Pilot: {mission.lmPilot}</p>
                  <p className="center black-text">Module Pilot: {mission.mPilot}</p>
                </div>
                <div className="card-action">
                  <Link to={`/timeline/${mission.missionId}`} className="btn indigo darken-4">View Timeline</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default MissionCard;