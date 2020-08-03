import React from 'react';
import './Profile.scss';
import SignUpForm from '../../shared/SignUpForm/SignUpForm';
import SignInForm from '../../shared/SignInForm/SignInForm';

class Profile extends React.Component {

  componentDidMount() {

  }

  render() {
    return (

      <div>
        <h1 className="text-white center">Welcome, Traveler!</h1>
          <div className="container">
          <div className="row flex-row">
            <SignUpForm /> 
            <h1 className="text-white center">Or</h1>
            <SignInForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;