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
              <div className="card">
                <div className="card-image"><img src={`https://${mission.patchUrl}`} alt={`${mission.missionName} Mission Patch`} />
                </div>
                <div className="card-content">
                <div className="card-title indigo-text">{`${mission.missionName}`}</div>
                  <div className="card-action">
                    <Link to={`/timeline/${mission.missionId}`} className="btn indigo">View Timeline</Link>
                  </div>
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