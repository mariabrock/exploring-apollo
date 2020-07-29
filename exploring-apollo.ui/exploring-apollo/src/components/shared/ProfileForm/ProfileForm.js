import React from 'react';
import './ProfileForm.scss';

class ProfileForm extends React.Component {

  componentDidMount() {

  }

  render() {
    return (

      <div>
        <div className="container">
          <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s6">
                    <input id="first_name" type="text" className="validate" />
                    <label for="first_name">First Name</label>
                    <span class="helper-text" data-error="error" data-success="right">You got a name, kid?</span>
                  </div>
                  <div className="input-field col s6">
                    <input id="last_name" type="text" className="validate" />
                    <label for="last_name">Last Name</label>
                    <span class="helper-text" data-error="error" data-success="right">Everybody needs one.</span>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="email" type="email" className="validate" />
                    <label for="email">Email</label>
                    <span class="helper-text" data-error="error" data-success="right">You got mail?</span>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="password" type="password" className="validate" />
                    <label for="password">Password</label>
                    <span class="helper-text" data-error="error" data-success="right">Make sure I can't guess it later.</span>
                  </div>
                </div>
              </form>
            </div>
          </div>

        <div className="container">
          <form action="#">
            <div class="file-field input-field">
              <div class="btn">
                <span>File</span>
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

export default ProfileForm;