import React from 'react';
import './SignInForm.scss';
import userData from '../../../helpers/data/userData';

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
    userData.loginUser(email, password)
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
      <div>
        <div className="container sign-in blue-grey card hoverable">
        <form action="submit" className="col s12 sign-up-form" onSubmit={this.signInEvent}>
        <div className="row">
          <div className="input-field col s12">
            <form 
            id="email" 
            type="email"
            value={email}
            handleChange={this.handleChange} 
            className="validate" />

            <label for="email">Email</label>
            <span class="helper-text" data-error="error" data-success="right">You got mail?</span>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <form 
            id="password" 
            type="password"
            value={password}
            handleChange={this.handleChange} 
            className="validate" />

            <label for="password">Password</label>
            <span class="helper-text" data-error="error" data-success="right">Make sure I can't guess it later.</span>
          </div>
        </div>
        <button class="btn waves-effect waves-light blue-grey darken-3" type="submit" name="action">Submit
          <i class="material-icons right">send</i>
        </button>
        </form>
      </div>
      </div>  
    );
  }
}

export default SignInForm;