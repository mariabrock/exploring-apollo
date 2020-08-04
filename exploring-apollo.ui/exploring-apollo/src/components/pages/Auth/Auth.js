import React from 'react';
import { getLoggedInUser } from '../../../helpers/data/userData';
import { getMostRecentUserInstance } from '../../../helpers/data/saveData';
import { Link } from 'react-router-dom';
// import { baseUrl } from '../constants.json';
import './Auth.scss';

class Auth extends React.Component {
state= {
  eventId: null
}
  componentDidMount() {
    const userId = getLoggedInUser();
      console.log(userId)
    getMostRecentUserInstance(userId)
    .then((result) => this.setState({ eventId: result.data.eventId }))
    .catch((error) => console.error('error getting userId', error));
  }

  render() {
    const { eventId } = this.state;
    return (
      <Link to={`/content/${eventId}`} className="waves-effect waves-light btn-large blue-grey darken-3">Continue</Link>
      // <Link to={`/timeline/${mission.missionId}`} className="btn indigo">View Timeline</Link>
    );
  }
}

export default Auth;
