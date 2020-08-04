import React from 'react';
import { getLoggedInUser } from '../../../helpers/data/userData';
import { saveUserInstance } from '../../../helpers/data/saveData';
import { getContentByEventId } from '../../../helpers/data/contentData';
import ContentDisplay from '../../shared/ContentDisplay/ContentDisplay';
import './ContentPage.scss';


class ContentPage extends React.Component{
  state = {
    eventId: null
  }

  componentDidMount() {
    const userId = getLoggedInUser();
      const userObj = { userId:userId, eventId:Number(this.props.match.params.eventId), instance:new Date()}
      saveUserInstance(userObj);

    this.getContentObjectsByEventId(this.props.match.params.eventId);
  }

  getContentObjectsByEventId(eventId) {
    getContentByEventId(eventId)
    .then((result) => this.setState({ eventId: result.data }))
    .catch((error) => console.error('error getting content by eventId info', error));
   }

  render(){
    const { eventId } = this.state;
    return(
      <div>
        <div className="container">
        {/* <button onClick={window.history.back()} className="waves-effect waves-light btn-large indigo">Go Back</button> */}
        </div>
      { eventId == null ? [] : eventId.map((eventId) => <ContentDisplay key={eventId.contentId} eventId={eventId} /> )}
      </div>
    );
  }
}

export default ContentPage;