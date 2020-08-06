import React from 'react';
import './SignUpForm.scss';
import { getLoggedInUser } from '../../../helpers/data/userData';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      userName: '',
    };
  }

  componentDidMount() {

  }

  registerEvent = (e) => {
    e.preventDefault();
    const {
      email, password, firstName, lastName, userName,
    } = this.state;
    const userObj = { ...this.state };
    getLoggedInUser.registerUser(email, password, firstName, lastName, userName)
      .then(() => {
        getLoggedInUser.addUserToDatabase(userObj);
        console.error('this works');
      })
      .catch((error) => {
        console.error('there was an error when logging in');
      });
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value }); // dynamically setting the state. Now I don't have to write separate functions to handle this.
  }

  render() {
    const {
      email, password, firstName, lastName, userName,
    } = this.state;
    return (
      <div>
      <div className="container pt-60 card hoverable">
        <div className="card-content">
        <h4 className="center blue-text">Register</h4>
          <form className="col s12" action="#">
            <div className="row">
              <div className="input-field col s6">
                <input  type="text" className="validate" />
                <label for="first_name">Username</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" type="text" className="validate" />
                <label for="last_name">Full Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input id="pass" type="password" className="validate" />
                <label for="pass">Password</label>
              </div>
              <div className="input-field col s6">
                <input id="c_pass" type="password" className="validate" />
                <label for="c_pass">Confirm Password</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" />
                <label for="email">Email</label>
              </div>
            </div>
            <div className="row mb-0">
              <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea"></textarea>
                <label for="textarea1">Address</label>
              </div>
            </div>
            <label>
            <input type="checkbox" />
            <span>Remember Me</span>
            </label>
            <div className="row">
              <div className="col s12 mt-25"> 
                <button className="btn waves-effect waves-light blue" type="submit">Register
                <i className="material-icons right">send</i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
  }
}

export default SignUpForm;