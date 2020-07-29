import React from 'react';
import './Profile.scss';
import ProfileForm from '../../shared/ProfileForm/ProfileForm';

class Profile extends React.Component {

  componentDidMount() {

  }

  render() {
    return (

      <div className="container">
        <h1 className="text-white center">Welcome, Traveler!</h1>
          <div className="container">
            <ProfileForm /> 
          </div>
      </div>
    );
  }
}

export default Profile;