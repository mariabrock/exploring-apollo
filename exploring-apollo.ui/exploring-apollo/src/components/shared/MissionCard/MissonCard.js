import React from 'react';
import { Link } from 'react-router-dom';
import './MissionCard.scss';

class MissionCard extends React.Component  {
  static propTypes = {
    mission: {}
  }
  
  render() {
    const { mission } = this.props;
    return (

      <div>
        <div className="container">
          <div className="row">
            <div className="col s12 l6">
              <div className="card">
                <div className="card-image"><img src={`https://${mission.patchUrl}`} alt={`${mission.missionName} Mission Patch`} />
                <div className="card-content">
                <div className="card-title">{`${mission.missionName}`}</div>
                </div>
                <div className="card-action">
                  <Link to={`/timeline/${mission.missionId}`} className="btn indigo">View Timeline</Link>
                </div>
                </div>
              </div>
            </div>

            {/* <div className="col s12 l6">
              <div className="card">
                  <div className="card-image"><img src="https://raw.githubusercontent.com/mariabrock/exploring-apollo/master/exploring-apollo.ui/exploring-apollo/src/helpers/images/apollo12patch.png" alt="Apollo 12 Mission Patch" /></div>
                    <div className="card-content">
                      <div className="card-title">Apollo 12</div>
                    </div>
                    <div className="card-action">
                    <a href="/timeline" className="btn disabled">View Timeline</a></div>
                  </div>
              </div> */}
          </div>
        </div>
      </div>
    );
  };
}

export default MissionCard;