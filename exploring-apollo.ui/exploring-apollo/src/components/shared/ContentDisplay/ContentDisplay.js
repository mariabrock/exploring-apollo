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

  render(){
    const { content } = this.props;
    return(
      // <div>
      //   <div className='container'>
          <img className="materialboxed" width="650" src="https://images-assets.nasa.gov/image/S69-34882/S69-34882~orig.jpg" />
      //   {content == null ? [] : content.map((content) =>
      //         )}
        
      //   </div>
      // </div>
    )
  }
  
}

export default ContentDisplay;