import React from 'react';
// import M from "materialize-css/dist/js/materialize.min.js";
import './MissionCard.scss';

class MissionCard extends React.Component  {
  componentDidMount() {
    
 }
  
  render() {
    return (

      <div>
        <div className="container">
          <h2>Cards</h2>
          <div className="row">
            <div className="col s12 l6">
              <div className="card">
                <div className="card-image"><img src="https://raw.githubusercontent.com/mariabrock/exploring-apollo/master/exploring-apollo.ui/exploring-apollo/src/helpers/images/apollo11patch.png" alt="Apollo 11 Mission Patch" />
                <div className="card-content">
                <div className="card-title">Apollo 11</div>
                </div>
                <div className="card-action">
                  <a href="#" className="btn indigo">View Timeline</a>
                </div>
                </div>
              </div>
            </div>

            <div className="col s12 l6">
              <div className="card">
                  <div className="card-image"><img src="https://raw.githubusercontent.com/mariabrock/exploring-apollo/master/exploring-apollo.ui/exploring-apollo/src/helpers/images/apollo12patch.png" alt="Apollo 12 Mission Patch" /></div>
                    <div className="card-content">
                      <div className="card-title">Apollo 12</div>
                    </div>
                    <div className="card-action">
                    <a href="#" className="btn disabled">View Timeline</a></div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  };
}

export default MissionCard;