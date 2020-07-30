import React from 'react';
import './SignUpForm.scss';
import userData from '../../../helpers/data/userData';

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
    userData.registerUser(email, password, firstName, lastName, userName)
      .then(() => {
        userData.addUserToDatabase(userObj);
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
        <div className="container sign-up blue-grey card hoverable">
          <div className="row">
              <form action="submit" className="col s12 sign-up-form" onSubmit={this.registerEvent}>
                <div className="row">
                  <div className="input-field col s6">
                    <form 
                    id="first_name" 
                    type="text"
                    value={firstName}
                    handleChange={this.handleChange} 
                    className="validate" />

                    <label for="first_name">First Name</label>
                    <span class="helper-text" data-error="error" data-success="right">You got a name, kid?</span>
                  </div>

                  <div className="input-field col s6">
                    <form 
                    id="last_name" 
                    type="text" 
                    value={lastName}
                    handleChange={this.handleChange}
                    className="validate" />

                    <label for="last_name">Last Name</label>
                    <span class="helper-text" data-error="error" data-success="right">Everybody needs one.</span>
                  </div>
                </div>

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

                <div className="row">
                  <div className="input-field col s12">
                    <form 
                    id="userName" 
                    type="text" 
                    value={userName}
                    handleChange={this.handleChange}
                    className="validate" />

                    <label for="userName">UserName</label>
                    <span class="helper-text" data-error="error" data-success="right">Insert Funny Name Here.</span>
                  </div>
                </div>
              </form>
            </div>
          </div>

        <div className="container">
          <form action="submit" onSubmit={this.registerEvent}>
            <div class="file-field input-field">
              <div class="btn">
                <span>Image</span>
                <input type="file" />
              </div>
              <div class="file-path-wrapper">
                <input class="file-path validate" type="text" />
                <span class="helper-text" data-error="error" data-success="right">I love nerds.</span>
              </div>
            </div>
          </form>
          <button class="btn waves-effect waves-light blue-grey darken-3" type="submit" name="action">Submit
            <i class="material-icons right">send</i>
          </button>
        </div>
      </div>
    );
  }
}

export default SignUpForm;