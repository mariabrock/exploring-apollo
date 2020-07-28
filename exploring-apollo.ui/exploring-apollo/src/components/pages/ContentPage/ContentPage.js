import React from 'react';

import { getContentByEventId } from '../../../helpers/data/contentData';
import ContentDisplay from '../../shared/ContentDisplay/ContentDisplay';
import './ContentPage.scss';


class ContentPage extends React.Component{
  state = {
    content: []
  }

  componentDidMount() {
    this.getContentByEventId(this.props.match.params.eventId);
  }

  getContentByEventId(eventId) {
    getContentByEventId(eventId)
    .then((result) => this.setState({ content: result.data }))
    .catch((error) => console.error('error getting contentId info', error));
   }

  render(){
    const { content } = this.setState;
    return(
      <ContentDisplay content={content}/>
    )
  }
}

export default ContentPage;