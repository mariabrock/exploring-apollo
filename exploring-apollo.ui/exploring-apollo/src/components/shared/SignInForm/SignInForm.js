import React from 'react';
import './SignInForm.scss';
import { getLoggedInUser } from '../../../helpers/data/userData';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  signInEvent = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    getLoggedInUser.loginUser(email, password)
      .then(() => {
        this.props.history.push('/home');
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
      email, password
    } = this.state;

    return (
      <div class="container col">
      <div class="row card hoverable">
        <div class="card-content">
        <h4 class="center blue-text">Login</h4>
        <form class="col s12">
        <div class="col s12">
          <div class="input-field">
            <input type="text" name="" placeholder="Username*" />
          </div>
        </div>
          <div class="col s12">
          <div class="input-field">
            <input type="password" name="" placeholder="Password*" />
          </div>
        </div>
        <div class="col s12">
          <p><label><input type="checkbox" /></label></p>
        </div>
        <div class="col s12 center">
          <button type="button" class="btn btn-large waves-effect waves-light blue">Login<i class="material-icons right">send</i></button>
        </div>
      </form>
      </div>
    </div>
    </div>
    );
  }
}

export default SignInForm;