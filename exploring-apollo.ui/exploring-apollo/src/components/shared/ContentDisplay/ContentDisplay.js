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
          <img className="responsive-img" width="350" alt={`${eventId.contentName}`} src={`https://${eventId.url}`} />
        </div>
      </div>
    );
  }
  
}

export default ContentDisplay;