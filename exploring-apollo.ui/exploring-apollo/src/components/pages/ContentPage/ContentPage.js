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
      console.log(userId)
      const userObj = { userId:userId, missionId:5, instance:new Date(2020, 8, 3, 9, 21), eventId:Number(this.props.match.params.eventId)}
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
    console.log(eventId);
    return(
      <div>
        <div className="container">
        {/* <button onClick={window.history.back()} className="waves-effect waves-light btn-large indigo">Go Back</button> */}
        </div>
      { eventId == null ? [] : eventId.map((eventId) => <ContentDisplay eventId={eventId} /> )}
      </div>
    );
  }
}

export default ContentPage;