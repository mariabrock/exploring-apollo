import React from 'react';

import { getContentByEventId } from '../../../helpers/data/contentData';
import ContentDisplay from '../../shared/ContentDisplay/ContentDisplay';
import './ContentPage.scss';


class ContentPage extends React.Component{
  state = {
    eventId: null
  }

  componentDidMount() {
    this.getContentObjectsByEventId(this.props.match.params.eventId);
  }

  getContentObjectsByEventId(eventId) {
    getContentByEventId(eventId)
    .then((result) => this.setState({ eventId: result.data }))
    .catch((error) => console.error('error getting content by eventId info', error));
   }

  render(){
    const { eventId } = this.state;
    console.log(eventId);
    return(
      <div>
      { eventId == null ? [] : eventId.map((eventId) => <ContentDisplay eventId={eventId} /> )}
      </div>
    );
  }
}

export default ContentPage;