import React from 'react';
import './ContentModal.scss';

import { getContentByEventId } from '../../../helpers/data/contentData';

class ContentModal extends React.Component{
  state = {
    content: []
  }

  componentDidMount() {
    this.getContent();
  }

  getContent(eventId) {
    getContentByEventId(eventId)
    .then((result) => this.setState({ content: result.data }))
    .catch((error) => console.error('error getting content info', error));
   }

  render(){
    const { content } = this.setState;
    const { events } = this.props;
    return(
      <div className="container">
      <div className="modal" id="content">
        <div className="modal-content">
          <img src={content.url}></img>
          <p>{content.description}</p>
        </div>
        <div className="modal-footer">
          <a href="#" className="modal-close btn orange">Close</a>
        </div>
      </div>
      </div>
    )
  }
  
}

export default ContentModal;