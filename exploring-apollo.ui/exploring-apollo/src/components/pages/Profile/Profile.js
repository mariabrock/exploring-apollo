import React from 'react';
import './Profile.scss';
import SignUpForm from '../../shared/SignUpForm/SignUpForm';
import SignInForm from '../../shared/SignInForm/SignInForm';

class Profile extends React.Component {

  componentDidMount() {

  }

  render() {
    return (

      <div className="container">
        <h1 className="text-white center">Welcome, Traveler!</h1>
          <div className="container">
            <SignUpForm /> 
            <h1 className="text-white center">OR</h1>
            <SignInForm />
          </div>
      </div>
    );
  }
}

export default Profile;