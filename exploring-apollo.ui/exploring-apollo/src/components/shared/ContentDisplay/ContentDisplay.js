import React from 'react';
import './ContentDisplay.scss';
import M from "materialize-css/dist/js/materialize.min.js";

class ContentDisplay extends React.Component{
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.materialboxed');
      M.Materialbox.init(elems);
    });
  }


  render() {
    const { eventId } = this.props;
    return(
      <div>
        <div className='container'>
          {/* <img className="responsive-img" width="350" src={`https://${eventId.url}`} /> */}
          <div className="row">
            <div className="col s12 l6">
              <div className="card indigo lighten-5">
                <div className="card-image"><img src={`https://${eventId.url}`} alt={`${eventId.contentName} Mission Patch`} /></div>
                <div className="card-content">
                <div className="card-title center black-text">{`${eventId.description}`}</div>
                <div className="card-action">
                  {/* <Link to={`/timeline/${mission.missionId}`} className="btn indigo darken-4">View Timeline</Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
  
}

export default ContentDisplay;